(function(){
  "use strict";

  const localHosts=new Set(["localhost","127.0.0.1","::1"]);
  const isNativeApp=Boolean(window.Capacitor?.isNativePlatform?.());
  window.QUIZHUB_PARTY_SERVER_URL=localHosts.has(window.location.hostname) && !isNativeApp
    ? window.location.origin
    : "https://quizhub-party-server.onrender.com";
})();
