(function(){
  "use strict";

  class QuizHubPartyClient {
    constructor(){
      const configuredUrl=window.QUIZHUB_PARTY_SERVER_URL;
      const serverUrl=configuredUrl
        ? new URL(configuredUrl,window.location.href)
        : new URL(window.location.origin);
      serverUrl.protocol=serverUrl.protocol==="https:"?"wss:":"ws:";
      serverUrl.pathname="/party";
      serverUrl.search="";
      serverUrl.hash="";
      this.listeners=new Map();
      this.socket=null;
      this.opened=this.wakeServer(serverUrl).then(()=>this.connect(serverUrl));
    }
    async wakeServer(serverUrl){
      const healthUrl=new URL(serverUrl);
      healthUrl.protocol=healthUrl.protocol==="wss:"?"https:":"http:";
      healthUrl.pathname="/healthz";
      const deadline=Date.now()+90000;
      let lastError=null;
      while(Date.now()<deadline){
        const controller=new AbortController();
        const timeout=window.setTimeout(()=>controller.abort(),10000);
        try{
          const response=await fetch(healthUrl,{cache:"no-store",signal:controller.signal});
          if(response.ok) return;
          lastError=new Error(`Party server health check returned ${response.status}.`);
        }catch(error){
          lastError=error;
        }finally{
          window.clearTimeout(timeout);
        }
        await new Promise((resolve)=>window.setTimeout(resolve,2000));
      }
      console.error("Could not wake the party server:",lastError);
      throw new Error("The party server did not start. Please try again in a moment.");
    }
    connect(serverUrl){
      return new Promise((resolve,reject)=>{
        const socket=new WebSocket(serverUrl);
        this.socket=socket;
        socket.addEventListener("open",resolve,{once:true});
        socket.addEventListener("error",()=>reject(new Error("Could not connect to the party server.")),{once:true});
        socket.addEventListener("message",(event)=>{
          let message;
          try{ message=JSON.parse(event.data); }
          catch(error){
            console.error("Invalid party server response:",error);
            return;
          }
          (this.listeners.get(message.type)||[]).forEach((listener)=>listener(message));
        });
        socket.addEventListener("close",(event)=>{
          (this.listeners.get("close")||[]).forEach((listener)=>listener(event));
        });
      });
    }
    on(type,listener){
      const listeners=this.listeners.get(type)||[];
      listeners.push(listener);
      this.listeners.set(type,listeners);
      return ()=>this.listeners.set(type,listeners.filter((entry)=>entry!==listener));
    }
    async send(message){
      await this.opened;
      if(this.socket.readyState!==WebSocket.OPEN) throw new Error("The party server connection has closed.");
      this.socket.send(JSON.stringify(message));
    }
    close(){
      if(this.socket && (this.socket.readyState===WebSocket.OPEN || this.socket.readyState===WebSocket.CONNECTING)){
        this.socket.close();
      }
    }
  }

  window.QuizHubPartyClient=QuizHubPartyClient;
})();
