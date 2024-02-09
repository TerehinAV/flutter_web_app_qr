'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2422bddaec5ff59cd4d0c4234d0279c0",
"index.html": "b8a21d40de105e8e9ba565749677255d",
"/": "b8a21d40de105e8e9ba565749677255d",
"main.dart.js": "7639e249eeeea77a2e85c5ec2090a5c7",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"README.md": "24e64ac1f175bd2d197bf83fbb83aba1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ff0f36bf761b38705a4eefd92267a8a4",
".git/config": "463327f625e0e280d5006beda899cb76",
".git/objects/32/e0ae7157374e2ed0aa43a2a722ca8e935a04fd": "6bba917a1b92c9f4ac4f672e9b9e45bc",
".git/objects/58/bca9629befdc3e9cb960961d7b6a8f286bfa5a": "ac6375c3f24627def56b7a580eb141d4",
".git/objects/0e/58520c7397272945eacc27812f3b556e5e5fa8": "6e6e67aa5cdf56dde6f408d5f70ee34a",
".git/objects/5a/9570817da7cffc3027b30c39854b0d6420a462": "144b72e7971abd65fa4b354552d32097",
".git/objects/b5/709b4694f7be81db9fdc5b164da90cc2b43f55": "c028fb7b00b791ed1f8134d08afc30a3",
".git/objects/ac/817baee0424ca4055275a3cf5ad2dc98214550": "389b031b4ddba30a184caeb22ab6c0ea",
".git/objects/d6/f4a8c48f2d015dd7f024eef9e5331f29ea37c9": "52495c2b2b90a85a1cce66cf5a9c146f",
".git/objects/d8/1cd930cfe077fa5153f7fc4cb36296a3c7d7f6": "6dbd1465f27769c044988a310daeac7b",
".git/objects/fc/3ac5965c52e6ef80fda089e9c9e886c6a755be": "eed13d8365ef7ab1829aae24f7e94e19",
".git/objects/cf/8c466f5b5adbe1ecc273331956a4cbc01ccbc3": "054ab8369135edad7f35bfa42af8a1e6",
".git/objects/4b/e4317ea2fa4ddc8c98b67e7939dff51572a843": "5c25bb039792e4bfc75a7de8b06dd39e",
".git/objects/pack/pack-10b50c93128a91977a4d588732e089cc10e6bad9.idx": "667b7c239fcb29878286e56c97eb4443",
".git/objects/pack/pack-10b50c93128a91977a4d588732e089cc10e6bad9.pack": "a5cfe9e338bf08c2ffd179c43e28ddda",
".git/objects/7c/b68e5deb0afdcb66f128fb15e36ea40daaa627": "41286a90c83919a5e07efdc3cc7036a7",
".git/objects/26/2710ca05f702f53e8b5fe29747b49389d1dc61": "f34f5150bff3e5d0436852ac9a60212d",
".git/objects/38/6e2b6987ce19b85f3371577fd3caee431e466c": "4cc6db36e1508127fd479bcbb665cebd",
".git/objects/09/96e51d8b46d3a751d4a804667edc203eb49753": "dcc0975d8c6f443fa16cc025781d206c",
".git/objects/09/0d198ac828740ca9bdd582ccfdd67b03665f55": "f7d2ba5357d9b48d5dea260748ab087a",
".git/objects/96/de08b280353bd30df261a9bb9cb7dc6727bec6": "afd11ef739cd8beccee1e588907613a7",
".git/objects/3a/4a78b59af62cd28084b0f71e2ef658debf5fd5": "c501fe7eb18fc23bda2bbd98bac499a6",
".git/objects/0f/6e256485265c8af24759c28b89eb3237486c7e": "c2da45ad280a220cc3a98088d9d6f56a",
".git/objects/ba/bdefd38ea9776a890988cacd7b14b08df7e17a": "8f8cca520d7bc427fc750070114a8548",
".git/objects/b8/920ba0b8009f0624792cbc51ba2691d9984215": "e2a36adbcd83e8ffb9608c92a513f450",
".git/objects/e8/c44e64f007c9589051afa754de33e9c1b0e85c": "ea14bb31fa64385bef7c3b0686b25678",
".git/objects/c5/5adb89c4b4f1517d775b8f1020095a0bfb3c06": "09aaace050aebe926071a0a6505c67d6",
".git/objects/c2/57538a7d3d91d87a2658974088ebbaaf760f1e": "37d1b85d5a5c4cd7d7e00b724f94a2af",
".git/objects/79/68ba81ab0ee7302f02ab6382f01a72db9c9175": "be57556593ff864f217016b0aa02978f",
".git/objects/84/16be27c27d512a275df57816637b1ba513a634": "0820e1238a940cf9ec391e28ab17c7f4",
".git/objects/85/8e18f52af5dcd3f35c7975886e7eb39289b0af": "1b9a593a04db9c0ae1be6dbea150ff9c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5dc2f461fc025e542e0c9fce9270b950",
".git/logs/refs/heads/master": "5dc2f461fc025e542e0c9fce9270b950",
".git/logs/refs/remotes/origin/HEAD": "e53a87bb75fca1fc2596508a65f2b316",
".git/logs/refs/remotes/origin/master": "f33938635e30785fb76b7265ee9e66a0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "f3b2f82ad1cfaff2806e12729b858292",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "f3b2f82ad1cfaff2806e12729b858292",
".git/index": "90489ac5b0e0699025981ff9b38248ee",
".git/packed-refs": "a8b61c6af4fb4040b483691fb5b1bcb4",
".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "1bc567cfc505d5a62042809675ccadf7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
