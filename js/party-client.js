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
      this.socket=new WebSocket(serverUrl);
      this.listeners=new Map();
      this.opened=new Promise((resolve,reject)=>{
        this.socket.addEventListener("open",resolve,{once:true});
        this.socket.addEventListener("error",()=>reject(new Error("Could not connect to the party server.")),{once:true});
      });
      this.socket.addEventListener("message",(event)=>{
        let message;
        try{ message=JSON.parse(event.data); }
        catch(error){
          console.error("Invalid party server response:",error);
          return;
        }
        (this.listeners.get(message.type)||[]).forEach((listener)=>listener(message));
      });
      this.socket.addEventListener("close",(event)=>{
        (this.listeners.get("close")||[]).forEach((listener)=>listener(event));
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
      if(this.socket.readyState===WebSocket.OPEN || this.socket.readyState===WebSocket.CONNECTING){
        this.socket.close();
      }
    }
  }

  window.QuizHubPartyClient=QuizHubPartyClient;
})();
