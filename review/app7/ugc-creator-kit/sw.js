/* FiledAwayCo ugc-creator-kit offline cache (v-app7) (2026-11-27). Page: network first, cache fallback. Files: cache first. Nothing is sent anywhere. */
var C='faa7-ugc-creator-kit-v1', F=["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-192.png", "icon-maskable-512.png", "apple-touch-icon.png", "favicon-32.png"];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F);}).then(function(){return self.skipWaiting();}));});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x.indexOf('faa7-ugc-creator-kit-')===0&&x!==C;}).map(function(x){return caches.delete(x);}));}).then(function(){return self.clients.claim();}));});
self.addEventListener('fetch',function(e){var r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
 if(r.mode==='navigate'){e.respondWith(fetch(r).then(function(res){var cp=res.clone();caches.open(C).then(function(c){c.put('index.html',cp);});return res;}).catch(function(){return caches.match('index.html');}));return;}
 e.respondWith(caches.match(r).then(function(m){return m||fetch(r);}));});
