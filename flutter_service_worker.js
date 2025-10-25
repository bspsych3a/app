'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cd30af31f5e6374abe3eaa40796215da",
"assets/AssetManifest.bin.json": "3854819744143fcb5ca58c95bcaea870",
"assets/AssetManifest.json": "8f9947d399cb74824130f93ca2cf1d9e",
"assets/assets/fonts/PressStart2P.ttf": "74496d9086d97aaeeafb3085e9957668",
"assets/assets/images/1.png": "cb02845ba38c79e02128202ad94f7800",
"assets/assets/images/10.png": "f4be4f00fe9496d218ef6d1ae00af513",
"assets/assets/images/11.png": "dde3ada7698852715cbc74d2d8dc59ac",
"assets/assets/images/12.png": "ea834dc43b7ed614f285104a2027d9aa",
"assets/assets/images/2.png": "80d9387c2b25605d43295a0e7811b06a",
"assets/assets/images/3.png": "1255de76c74ea2f313a13b0a62d0b0c0",
"assets/assets/images/4.png": "45c4b866b85f3921eed951243673f0e1",
"assets/assets/images/5.png": "63cf3f158c044c24fd9c5058d5b021f7",
"assets/assets/images/6.png": "5718d9738db14f2cf430569e429ae19a",
"assets/assets/images/7.png": "306bed48fc73883f59ec024e7a90fc72",
"assets/assets/images/8.png": "068bb862e23f7014c1cb8b89544ca4e2",
"assets/assets/images/9.png": "536bb1ac1f6eff3f0eb534f4c18391d2",
"assets/assets/images/apple.png": "52c6f13baafef1f58181a1d24bf126b6",
"assets/assets/images/ball.png": "0394af344c7e0e4d4c5295465e5fbb21",
"assets/assets/images/books.png": "4c1964ce727fa8ea5b9f0485cecffc22",
"assets/assets/images/brazil.png": "71fb2234ab960d942812d5c6a45e2894",
"assets/assets/images/canada.png": "f8733dd0bd935d5d955f743ab2979af7",
"assets/assets/images/car.png": "d9af47558ef32e4a8b3c927812754b5d",
"assets/assets/images/cat.png": "61c255a4dcc5041b608b388a73cd7bd3",
"assets/assets/images/chair.png": "2a5fe304c7734805072a2d7b109c5bea",
"assets/assets/images/china.png": "333c8d699905a80dc8266b4914fcc02e",
"assets/assets/images/dog.png": "113b1fb8fdaad3e4b0365117369c2cd9",
"assets/assets/images/france.png": "63b883b507a1ead6e0c473b5339413fa",
"assets/assets/images/germany.png": "ac501a4663405caf0f8f470f11a50af9",
"assets/assets/images/house.png": "c4a18feb5a254b9576519f5d39f1efdc",
"assets/assets/images/india.png": "7ff1ceef01d788e6ab4dfab64e932861",
"assets/assets/images/italy.png": "467b453ae5429bcfaa4304f10fc38d6b",
"assets/assets/images/japan.png": "53d06790e5110b09f6fbb16ee1e19322",
"assets/assets/images/philippines.png": "c71b511b464424f96cf7c89573c78e23",
"assets/assets/images/shoes.png": "f68904b16298d89770b19224af7dc7d8",
"assets/assets/images/south_korea.png": "78fc55160afbd85deaf0d1efddbf2706",
"assets/assets/images/sun.png": "134d12583ae87542925fcbdfa4cd0b2f",
"assets/assets/images/tree.png": "bd59edade04d946ffa26ae7377d38078",
"assets/assets/images/united_kingdom.png": "e99c1a0ac5f540756c93d6a5f88ed48b",
"assets/assets/images/usa.png": "eef548948d809adf20a6b3a8b09f9a4a",
"assets/assets/images/water.png": "fa3c0171eae8207bf4d397fd2db07ecc",
"assets/FontManifest.json": "bf1882d2cdb6bc3d886ff02e2a944591",
"assets/fonts/MaterialIcons-Regular.otf": "10a07d3b9331571b4442f628eda50897",
"assets/NOTICES": "7463cb3b9f93a73efc02db6709a6489f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "6f77ed77fe5f078d4dc49646ad0a70a3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7aa9883b768d63e2f5853a93855be51e",
"/": "7aa9883b768d63e2f5853a93855be51e",
"main.dart.js": "ec27be6a6f063ef71e4eb706cd316627",
"manifest.json": "93c37eecd235ec821395472848c24759",
"version.json": "274cb08730044d4ae5394930d9c2372d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
