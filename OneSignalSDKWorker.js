!function(){"use strict";try{self["workbox:sw:4.3.1"]&&_()}catch(t){}const t="https://storage.googleapis.com/workbox-cdn/releases/4.3.1",e={backgroundSync:"background-sync",broadcastUpdate:"broadcast-update",cacheableResponse:"cacheable-response",core:"core",expiration:"expiration",googleAnalytics:"offline-ga",navigationPreload:"navigation-preload",precaching:"precaching",rangeRequests:"range-requests",routing:"routing",strategies:"strategies",streams:"streams"};self.workbox=new class{constructor(){return this.v={},this.t={debug:"localhost"===self.location.hostname,modulePathPrefix:null,modulePathCb:null},this.s=this.t.debug?"dev":"prod",this.o=!1,new Proxy(this,{get(t,s){if(t[s])return t[s];const o=e[s];return o&&t.loadModule(`workbox-${o}`),t[s]}})}setConfig(t={}){if(this.o)throw new Error("Config must be set before accessing workbox.* modules");Object.assign(this.t,t),this.s=this.t.debug?"dev":"prod"}loadModule(t){const e=this.i(t);try{importScripts(e),this.o=!0}catch(s){throw console.error(`Unable to import module '${t}' from '${e}'.`),s}}i(e){if(this.t.modulePathCb)return this.t.modulePathCb(e,this.t.debug);let s=[t];const o=`${e}.${this.s}.js`,r=this.t.modulePathPrefix;return r&&""===(s=r.split("/"))[s.length-1]&&s.splice(s.length-1,1),s.push(o),s.join("/")}}}();
//# sourceMappingURL=workbox-sw.js.map

'use strict';

(function (self, workbox) {
  let OFFLINE_PAGE = '/offline';
  let OFFLINE_IMG =
    'https://www.petlove.com.br/static/uploads/banner_image/image/6015/medium_offline.jpg';
  let res;
  let precacheConfig = new Array().concat(
    ['/manifest.json', '/?utm_source=pwa', OFFLINE_PAGE, OFFLINE_IMG],
    String('https://www.petlove.com.br/static/greyhound/scripts/app.min-8102fb684c.js,https://www.petlove.com.br/static/greyhound/scripts/app-5a79d77b71.min.js.map').split(',')
  );

  let VERSION = '5f89dd24744e0346b8f25a24';
  let cacheName =
    'pl-static-' +
    VERSION +
    '-' +
    (self.registration ? self.registration.scope : '');
  let ignoreUrlParametersMatching = [/^utm_/];
  let shuldRespondForDynamicContent = [
    /svg|gif|webp|woff2|woff|ttf|eot|css|js|json|jpg|jpeg|png$/
  ];
  let hashParamName = '_sw-precache';

  function filterValidUrls(item) {
    return Boolean(item);
  }

  function addDirectoryIndex(originalUrl, index) {
    let url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  }

  function cleanResponse(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    let bodyPromise =
      'body' in originalResponse
        ? Promise.resolve(originalResponse.body)
        : originalResponse.blob();

    return bodyPromise.then(function (body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  }

  function createCacheKey(
    originalUrl,
    paramName,
    paramValue,
    dontCacheBustUrlsMatching
  ) {
    // Create a new URL object to avoid modifying originalUrl.
    let url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (
      !dontCacheBustUrlsMatching ||
      !url.pathname.match(dontCacheBustUrlsMatching)
    ) {
      url.search +=
        (url.search ? '&' : '') +
        encodeURIComponent(paramName) +
        '=' +
        encodeURIComponent(paramValue);
    }

    return url.toString();
  }

  function isPathWhitelisted(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    let path = new URL(absoluteUrlString).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  }

  function stripIgnoredUrlParameters(originalUrl, ignoreUrlParametersMatching) {
    let url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search
      .slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function (kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function (kv) {
        return ignoreUrlParametersMatching.every(function (ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function (kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  }

  function checkDynamicImages(originalUrl, arrayOfRegex) {
    return arrayOfRegex.reduce(function (retorno, rgx) {
      if (rgx.test(originalUrl)) {
        retorno = true;
      }
      return retorno;
    }, false);
  }

  function mapParamToUrl(item) {
    let absoluteUrl;
    if (item.indexOf('https') === -1) {
      absoluteUrl = new URL(item, self.location);
    } else {
      absoluteUrl = item;
    }
    let cacheKey = createCacheKey(absoluteUrl, hashParamName, VERSION, false);
    return [absoluteUrl.toString(), cacheKey];
  }

  let urlsToCacheKeys = new Map(
    precacheConfig.filter(filterValidUrls).map(mapParamToUrl)
  );

  function setOfCachedUrls(cache) {
    return cache
      .keys()
      .then(function (requests) {
        return requests.map(function (request) {
          return request.url;
        });
      })
      .then(function (urls) {
        return new Set(urls);
      });
  }

  self.addEventListener('install', function (event) {
    event.waitUntil(
      self.caches
        .open(cacheName)
        .then(function (cache) {
          return setOfCachedUrls(cache).then(function (cachedUrls) {
            return Promise.all(
              Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                // If we don't have a key matching url in the cache already, add it.
                if (!cachedUrls.has(cacheKey)) {
                  let request = new Request(cacheKey, {
                    credentials: 'same-origin'
                  });
                  return fetch(request).then(function (response) {
                    // Bail out of installation unless we get back a 200 OK for
                    // every request.
                    if (!response.ok) {
                      throw new Error(
                        'Request for ' +
                          cacheKey +
                          ' returned a ' +
                          'response with status ' +
                          response.status
                      );
                    }
                    return cleanResponse(response).then(function (
                      responseToCache
                    ) {
                      return cache.put(cacheKey, responseToCache);
                    });
                  });
                }
              })
            );
          });
        })
        .then(function () {
          // Force the SW to transition from installing -> active state
          return self.skipWaiting();
        })
    );
  });

  self.addEventListener('activate', function (event) {
    let setOfExpectedUrls = new Set(urlsToCacheKeys.values());
    event.waitUntil(
      self.caches
        .open(cacheName)
        .then(function (cache) {
          return cache.keys().then(function (existingRequests) {
            return Promise.all(
              existingRequests.map(function (existingRequest) {
                if (!setOfExpectedUrls.has(existingRequest.url)) {
                  return cache.delete(existingRequest);
                }
              }),
              self.caches.keys().then((keys) => {
                return Promise.all(
                  keys.filter((key) => {
                    if (key != cacheName) {
                      return self.caches.delete(key);
                    }
                  })
                );
              })
            );
          });
        })
        .then(function () {
          return self.clients.claim();
        })
    );
  });

  self.addEventListener('fetch', function (event) {
    if (event.request.method === 'GET') {
      // Should we call event.respondWith() inside this fetch event handler?
      // This needs to be determined synchronously, which will give other fetch
      // handlers a chance to handle the request if need be.
      let shouldRespond;
      // First, remove all the ignored parameters and hash fragment, and see if we
      // have that URL in our cache. If so, great! shouldRespond will be true.
      let url = stripIgnoredUrlParameters(
        event.request.url,
        ignoreUrlParametersMatching
      );
      shouldRespond = urlsToCacheKeys.has(url);
      // If shouldRespond is false, check again, this time with 'index.html'
      // (or whatever the directoryIndex option is set to) at the end.
      let directoryIndex = '/';
      if (!shouldRespond && directoryIndex) {
        url = addDirectoryIndex(url, directoryIndex);
        shouldRespond = urlsToCacheKeys.has(url);
      }
      // If shouldRespond is still false, check to see if this is a navigation
      // request, and if so, whether the URL matches navigateFallbackWhitelist.
      let navigateFallback = '';
      if (
        !shouldRespond &&
        navigateFallback &&
        event.request.mode === 'navigate' &&
        isPathWhitelisted([], event.request.url)
      ) {
        url = new URL(navigateFallback, self.location).toString();
        shouldRespond = urlsToCacheKeys.has(url);
      }

      if (!shouldRespond) {
        shouldRespond = checkDynamicImages(url, shuldRespondForDynamicContent);
      }

      // If shouldRespond was set to true at any point, then call
      // event.respondWith(), using the appropriate cache key.
      if (shouldRespond) {
        if (!urlsToCacheKeys.has(url)) {
          urlsToCacheKeys.set(event.request.url);
        }
        event.respondWith(
          //assets condition - cache first
          self.caches
            .open(cacheName)
            .then(function (cache) {
              return cache
                .match(urlsToCacheKeys.get(url) || url)
                .then(function (response) {
                  if (response) {
                    // console.log('[Serving content from cache] ', event.request.url);
                    return response;
                  }
                  throw Error(
                    'The cached response that was expected is missing.'
                  );
                });
            })
            .catch(function () {
              //go to the network
              let fetchRequest = event.request.clone();
              return fetch(fetchRequest)
                .then(function (response) {
                  let responseToCache = response.clone(); //clone response to return one and cache the second
                  cacheResponse(event.request, responseToCache);
                  return response;
                })
                .catch(function () {
                  fallback(fetchRequest);
                });
            })
        );
      } else {
        if (
          event.request.url.indexOf(
            self.registration ? self.registration.scope : ''
          ) > -1
        ) {
          return event.respondWith(
            //different from asset: fetch, cache and return response
            fetch(event.request.clone())
              .then(function (response) {
                cacheResponse(event.request, response.clone());
                return response;
              })
              .catch(function () {
                return fallback(event.request);
              })
          );
        }
      }
    }
  });

  function cacheResponse(request, responseToCache) {
    request.url = removeQueryString(request.url);
    self.caches
      .open(cacheName)
      .then(function (cache) {
        return cache.put(request.url, responseToCache);
      })
      .catch(function () {
        return fallback(request);
      });
  }

  function fallback(request) {
    if (request.method === 'GET' && request.url.indexOf('service') === -1) {
      let headers = request.headers.get('accept');
      request.url = removeQueryString(request.url);
      return self.caches
        .match(request.url)
        .then(function (response) {
          if (response) {
            return response;
          } else {
            throw new Error('Cache not found for url ' + request.url);
          }
        })
        .catch(function () {
          if (headers.includes('text/html')) {
            res = OFFLINE_PAGE;
          } else if (headers.includes('image')) {
            res = OFFLINE_IMG;
          }
          res = [res].filter(filterValidUrls).map(mapParamToUrl);

          if (res.length) {
            res = res[0][1];
            return self.caches.open(cacheName).then(function (cache) {
              return cache.match(new Request(new URL(res, self.location)));
            });
          }
        });
    }
  }

  function removeQueryString(url) {
    return url.split('?')[0];
  }

  workbox.routing.registerRoute(
    /^https:\/\/connect\.facebook\.net/,
    workbox.strategies.cacheFirst({
      cacheName: 'facebook'
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/\google\.com\.br/,
    workbox.strategies.cacheFirst({
      cacheName: 'google'
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/\google-analytics\.com/,
    workbox.strategies.cacheFirst({
      cacheName: 'analytics'
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/\apis\.google\.com/,
    workbox.strategies.cacheFirst({
      cacheName: 'googleapis'
    })
  );
})(self, workbox);

importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');
