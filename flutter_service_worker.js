'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2422bddaec5ff59cd4d0c4234d0279c0",
"index.html": "16ace33c27e02cc35739216dd2c0c9c1",
"/": "16ace33c27e02cc35739216dd2c0c9c1",
"main.dart.js": "127267919f04bc0d8aa92164e4a5874c",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"README.md": "24e64ac1f175bd2d197bf83fbb83aba1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ff0f36bf761b38705a4eefd92267a8a4",
".git/config": "463327f625e0e280d5006beda899cb76",
".git/objects/61/635c0e7f6da224935d70d833adf3974992ab01": "a280e1ceb8128a486b2cc37f7e06ba18",
".git/objects/6f/40b729a2b7e29c6b2a0bdd57386ad5c5bb9df6": "1f77e688821cc115d9085d6747739d0c",
".git/objects/6a/5632579864d0c081c7a12195880ebc45503e41": "d5cc59b46d208e06ef15baeb2e54ba71",
".git/objects/6a/728fe80982c3297909a7341c767a6ba707a514": "bdf61775fa0dff98ea63838c8476b54c",
".git/objects/32/e0ae7157374e2ed0aa43a2a722ca8e935a04fd": "6bba917a1b92c9f4ac4f672e9b9e45bc",
".git/objects/58/bca9629befdc3e9cb960961d7b6a8f286bfa5a": "ac6375c3f24627def56b7a580eb141d4",
".git/objects/0e/179ba53f61abb19b88c19ec01abce535103193": "5dd89566b33e0c7e55014ed74b1a8b7b",
".git/objects/0e/58520c7397272945eacc27812f3b556e5e5fa8": "6e6e67aa5cdf56dde6f408d5f70ee34a",
".git/objects/5a/9570817da7cffc3027b30c39854b0d6420a462": "144b72e7971abd65fa4b354552d32097",
".git/objects/5a/f22e40447650fdb310dc2cef4b053a043a8f4a": "919d04516f05d06295d83021ca5f0c4e",
".git/objects/9d/6a4c4a1a9ff686387811e6dc3404bb583fead2": "8426fc9755508875967fb57290c33715",
".git/objects/a4/f2b6e634f276cd9d10ce209836414c70ba29b4": "bf70ce8ec39185e0bb17ad3ab4cabc97",
".git/objects/b5/709b4694f7be81db9fdc5b164da90cc2b43f55": "c028fb7b00b791ed1f8134d08afc30a3",
".git/objects/ac/e2838404037937ee237488d429e999ae3994c7": "443640bf569c52d151b53a6655475d34",
".git/objects/ac/817baee0424ca4055275a3cf5ad2dc98214550": "389b031b4ddba30a184caeb22ab6c0ea",
".git/objects/ac/c02e547306949dcbddfed6c741ef45d89c5a90": "b390cd4454c42c9a6f90bcbaeeac6ae6",
".git/objects/b3/e96e686ae757e960251828c40f90a910c0483d": "f6b1deeb75915f23a2cb8f5113ea194d",
".git/objects/df/440a02a665681abf8a1842ff32e6885babab75": "b40c36b89e72bfd0559ee578ced729fd",
".git/objects/da/27c3a04765785a862496c1d57733f10a99cb2e": "ab42e31fc2c1b88da14a1b2c7ef8144c",
".git/objects/d6/9267f772859626787466fc59c483c9c8f735a0": "6bec137f1d4100edeb497529e3107b4b",
".git/objects/d6/f4a8c48f2d015dd7f024eef9e5331f29ea37c9": "52495c2b2b90a85a1cce66cf5a9c146f",
".git/objects/bc/f58c42a7cbf503b3240b0a47f7e34ba4e8aaab": "308733c19710b36a40dec7b91fe8d63a",
".git/objects/d8/1cd930cfe077fa5153f7fc4cb36296a3c7d7f6": "6dbd1465f27769c044988a310daeac7b",
".git/objects/ab/87f48d94452dc72a014c31a94e9c5158944b19": "3a2088aed9c5a9228df864efd2d9fd89",
".git/objects/c0/f99832d99829f0c51406fc4e4ecd4b55674398": "badeb390ba688a925fddd3dcf313773b",
".git/objects/fc/3ac5965c52e6ef80fda089e9c9e886c6a755be": "eed13d8365ef7ab1829aae24f7e94e19",
".git/objects/e3/d145d158b9f07db17791d21105df8bbf950593": "aedc23515089ab2237cb1a92ed66a22f",
".git/objects/cf/8c466f5b5adbe1ecc273331956a4cbc01ccbc3": "054ab8369135edad7f35bfa42af8a1e6",
".git/objects/ca/7c997f4c767ad57145b1137a0ea6b2626c04f4": "090b642e324f423ab765887cbcf06dac",
".git/objects/c8/29e5e9742e12a34fd2275a6ac7951cf732961f": "480e54b928799f48d4a0b4f30f14b2bd",
".git/objects/ed/13a6d56cb467f4ce5cd82ebd470b1b9b8dedcd": "0565066f109c36ff3239d5a0b9ceb352",
".git/objects/c1/7936d5dc7f0f3425fc4c1d62437ed365e0c2d9": "c8852406cf821b32239e4fd13ca1a4b1",
".git/objects/4e/c30f38622291d5e69c1a3f55c2f5008ffd801e": "8821bba76aeb033a7cc48586792e2b31",
".git/objects/20/11d1cc6630a70fec73ce50bd986738a19bad91": "ae14b1e54f15fd5612dcf1742f1b4ed3",
".git/objects/27/b5a7dae266f0ec704837a4cb81f1333fc7b2b2": "d3df0844cf9555858b88808304f1f814",
".git/objects/4b/e4317ea2fa4ddc8c98b67e7939dff51572a843": "5c25bb039792e4bfc75a7de8b06dd39e",
".git/objects/pack/pack-10b50c93128a91977a4d588732e089cc10e6bad9.idx": "667b7c239fcb29878286e56c97eb4443",
".git/objects/pack/pack-10b50c93128a91977a4d588732e089cc10e6bad9.pack": "a5cfe9e338bf08c2ffd179c43e28ddda",
".git/objects/7d/4ba56ac19977caddba9ed39fb49e5fbeeb4625": "7226b2158e0d09b2023006300e80b208",
".git/objects/7c/4666cb262b9c8d7fbe97272e9363b043830a24": "5e445e5e5eb9e6cc09ea1e9cd731f6be",
".git/objects/7c/b68e5deb0afdcb66f128fb15e36ea40daaa627": "41286a90c83919a5e07efdc3cc7036a7",
".git/objects/89/b9c409a23a1eb9bef9fd123fbc059d094fd313": "99b5814e213723e1b74869221d732152",
".git/objects/73/291caeeb3e844d54af159921c6fa4c4995de8a": "5dff1d0576f5ac579f456e580b5368d0",
".git/objects/74/fdb2d57a0eb65789b7b049346db501efd008ec": "32d8677e58a42470a00f5f5a6eb083f4",
".git/objects/8a/eb06f79f6e3d8babf2eba05f38759873230325": "8b80188931108635e4d50964e2ff1ef2",
".git/objects/10/ea3394149ac3056faf0c245585dce4cf1dd808": "390d14728a488c812bcc73467aebb118",
".git/objects/26/2710ca05f702f53e8b5fe29747b49389d1dc61": "f34f5150bff3e5d0436852ac9a60212d",
".git/objects/26/5fd60628f697a0b0d43bc0cc263bc6859940d9": "2bb7a5656ebd6be57a8abf7ad75c4083",
".git/objects/75/746421b1228a97d8df28fb5831b3374e4af3f2": "3a1f5108d2cddc97940269626d60c177",
".git/objects/9f/1d57c56304cd75fce96637d3acd8939889bfa0": "9c9e4c66662b107a395c283059d0663c",
".git/objects/07/628e820f59bf653a1d8a29712cfa38abddd47e": "8d7c32a8a8d9554d32d8132349824836",
".git/objects/38/6e2b6987ce19b85f3371577fd3caee431e466c": "4cc6db36e1508127fd479bcbb665cebd",
".git/objects/09/96e51d8b46d3a751d4a804667edc203eb49753": "dcc0975d8c6f443fa16cc025781d206c",
".git/objects/09/0d198ac828740ca9bdd582ccfdd67b03665f55": "f7d2ba5357d9b48d5dea260748ab087a",
".git/objects/31/aa20c0b0ae0265e898878ed46dd7b66ea8d625": "36637362b95fad43496b4d63491ec4f6",
".git/objects/65/198847f5416995cc99ef332b5280b57f3b67f6": "a31376b48b2731be44bccd41196292a2",
".git/objects/96/de08b280353bd30df261a9bb9cb7dc6727bec6": "afd11ef739cd8beccee1e588907613a7",
".git/objects/3a/494e42accf3271ef8a80bce57c1595bdb919db": "a51ed50807d92580f71a152fc0bddbc6",
".git/objects/3a/4a78b59af62cd28084b0f71e2ef658debf5fd5": "c501fe7eb18fc23bda2bbd98bac499a6",
".git/objects/54/a41c346f7c9aeaeb445e7f56e226ef9ba39343": "3210379a2a06fd9bfc7c27c92f5bce83",
".git/objects/30/f3140ddd45d0f5685cd36e8933d19104caa6b5": "58be4637888b413cd72bc273a4461512",
".git/objects/6d/40cd0ead6d46eb29efba7c5c1b87e252398c77": "58e21d571ab5635569bd0d3bd6ec36b5",
".git/objects/6c/88e5e87209f16a436f335be0051aba8890dcb1": "661389aaa137ba27e371eb8c5f3a75ed",
".git/objects/39/be1f486f29a40040ea05b08e2b39a9daa8747e": "1343b641e6b110db431cbda6581531b1",
".git/objects/0f/6e256485265c8af24759c28b89eb3237486c7e": "c2da45ad280a220cc3a98088d9d6f56a",
".git/objects/0f/0d1483a04146a5530fd2f2555256e846907f42": "84249f0743da3ec6cd4d04d07b128f8c",
".git/objects/ba/bdefd38ea9776a890988cacd7b14b08df7e17a": "8f8cca520d7bc427fc750070114a8548",
".git/objects/a0/78d56ddecd44963a0817221dd4dd7b47c87eaa": "16e1ea5039774bf531a6c23051489a96",
".git/objects/a7/8aeb690bb85702b4acd465c52dd577843da039": "21320cd9fb2c1445fa1f82f1290f27f2",
".git/objects/b8/920ba0b8009f0624792cbc51ba2691d9984215": "e2a36adbcd83e8ffb9608c92a513f450",
".git/objects/b6/1a3151e96a7fd9bcfb33f3738b6588d3c3edf0": "1a4ad8dbe1e35b659ec940dc7e287eb9",
".git/objects/de/eb2a0654bff514f3ef587018c092bb6482e7a3": "b9933396d9737c9e4616dd075b57070e",
".git/objects/cd/955d9cabb3d1a2165e5878ea4fa6a8c052a173": "c7ecf0cc60950d95f0cd50c086a83db2",
".git/objects/cd/9b3b1272d73831b1025fcac12a912af32dcbac": "c32a08e27c052744d8a3aa0a48068d35",
".git/objects/cc/130d23f76a19f59fde3c04387f0dfe65e1acc2": "a8997f03a90865494a9b80f23360eb33",
".git/objects/e8/c44e64f007c9589051afa754de33e9c1b0e85c": "ea14bb31fa64385bef7c3b0686b25678",
".git/objects/ff/dc63229375fb425fb028766dcba3cfdb24f4e5": "95b210243b992a49087f500edc17b468",
".git/objects/c5/5adb89c4b4f1517d775b8f1020095a0bfb3c06": "09aaace050aebe926071a0a6505c67d6",
".git/objects/c2/57538a7d3d91d87a2658974088ebbaaf760f1e": "37d1b85d5a5c4cd7d7e00b724f94a2af",
".git/objects/e9/61be7cb43a0d4d90c5aa1c0d412fd234b328a1": "44e7bed05dda401b652b260aa258ebf9",
".git/objects/e9/e99ced65989b492b950d051a456c9995e41e82": "5bb144188a70e2a84196f40e16fc153f",
".git/objects/f1/da57c5638288a271defa5a54ff380172fb912c": "d3190b5999684b5935f30811940b0e36",
".git/objects/cb/cb704f74f0da977b3b5fda263324bd2dce5b45": "63334d188148f94a42104dff88a5dc2a",
".git/objects/79/68ba81ab0ee7302f02ab6382f01a72db9c9175": "be57556593ff864f217016b0aa02978f",
".git/objects/70/89a7668cb25d0f456db2cc744f678c6f31251b": "a2e423f7a180b89e651914c2df073d4a",
".git/objects/84/16be27c27d512a275df57816637b1ba513a634": "0820e1238a940cf9ec391e28ab17c7f4",
".git/objects/8d/05d4ad408f709754ee26e0d4d1f31387ab535d": "35bda0292bc719640dc8be6f45e8f573",
".git/objects/8c/8476be10d8e2e74436e5ca193347c01e983d5c": "77a1ecbacd209ccc026f0497991efbca",
".git/objects/85/8e18f52af5dcd3f35c7975886e7eb39289b0af": "1b9a593a04db9c0ae1be6dbea150ff9c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ba6f6ab2954871e8d198dfe996a5fe55",
".git/logs/refs/heads/master": "ba6f6ab2954871e8d198dfe996a5fe55",
".git/logs/refs/remotes/origin/HEAD": "e53a87bb75fca1fc2596508a65f2b316",
".git/logs/refs/remotes/origin/master": "94ba110713d85e4b1c826604d350254e",
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
".git/refs/heads/master": "86023d9173eec538920d8137cf5c10ae",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "86023d9173eec538920d8137cf5c10ae",
".git/index": "85076cace9d001ee390f99e6b39520f7",
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
