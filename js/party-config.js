(function(){
  "use strict";

  const localHosts=new Set(["localhost","127.0.0.1","::1"]);
  const isNativeApp=Boolean(window.Capacitor?.isNativePlatform?.());
  window.QUIZHUB_PARTY_SERVER_URL=localHosts.has(window.location.hostname) && !isNativeApp
    ? window.location.origin
    : "https://quizhub-party-server.onrender.com";
  window.QUIZHUB_NETHUB_API_URL=window.QUIZHUB_NETHUB_API_URL||"https://quizhub-nethub.quizhubdev.workers.dev";
  window.quizHubNetHubApiBase=()=>{
    const configured=window.QUIZHUB_NETHUB_API_URL.trim();
    if(configured) return configured.replace(/\/+$/,"");
    if(localHosts.has(window.location.hostname) && !isNativeApp) return window.location.origin;
    return "";
  };
})();
