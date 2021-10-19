'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "05afdfac71823aef2e34604f995f3123",
"/": "05afdfac71823aef2e34604f995f3123",
"assets/assets/eat/sudogwon/cafeNbakery/4.png": "2e0c1efc14c1ee9c0a265c3ad53debcc",
"assets/assets/eat/sudogwon/cafeNbakery/2.png": "a417780e5f8052a179373e795375e2c5",
"assets/assets/eat/sudogwon/cafeNbakery/3.png": "a2ba02d7cac7e40a2bd96b6b88b2d67b",
"assets/assets/eat/sudogwon/cafeNbakery/1.png": "31d59910d85acf1af8e82b34c498beec",
"assets/assets/eat/sudogwon/del_place/2.png": "6902397d734dc7c7e9279bc91acdeb3a",
"assets/assets/eat/sudogwon/del_place/4.jpeg": "3b32e4c8faea57e4afb331585ed63322",
"assets/assets/eat/sudogwon/del_place/3.png": "7bb768ac3d52eab623880f5f2703d58d",
"assets/assets/eat/sudogwon/del_place/1.png": "a61f700ce2ac48dd6ca18e7f8e4999a5",
"assets/assets/eat/seoul/cafeNbakery/4.png": "4c0df83527c6b2245e39ccd170d9afbc",
"assets/assets/eat/seoul/cafeNbakery/5.png": "712ca112252634d53d7edb07e41f0657",
"assets/assets/eat/seoul/cafeNbakery/2.png": "404b42188deeda278fbf730d3edc2f38",
"assets/assets/eat/seoul/cafeNbakery/3.png": "0f9feb631695e515b844d72b0df69c96",
"assets/assets/eat/seoul/cafeNbakery/1.png": "7d3b3400a2eefcaca0ce8a1af23a15d2",
"assets/assets/eat/seoul/del_place/4.png": "eadbd8f143788a953217f2b36fefb7a3",
"assets/assets/eat/seoul/del_place/2.png": "70cd91817e2a721d3aa4b22e00976bd9",
"assets/assets/eat/seoul/del_place/3.png": "c63d1cab395ba3fab53ce7f9b442aa99",
"assets/assets/eat/seoul/del_place/1.png": "27ee56c4c0b183899004b99b2e583c07",
"assets/assets/close_icon.png": "be5569970e73178b97e991d0314fc599",
"assets/assets/icn_24_arrow_forward.png": "b93248aca613b6459cbc0f964e417dee",
"assets/assets/after_rain.png": "43723ae94ae4f0484e1834d146afdc07",
"assets/assets/heavy_rain.png": "e25e63f7d4c995720ce77e38e5668b37",
"assets/assets/gyeonsang/2.jpg": "67e49232ed4da3d31dfed8e1161814bc",
"assets/assets/gyeonsang/3.png": "f40887d2acc36b23aa98050ef199d595",
"assets/assets/gyeonsang/1.png": "cf095555cb373a42c38a036dbfc8b044",
"assets/assets/rain.png": "8ee1440dd6082da034cdc11c4ae600eb",
"assets/assets/gyeongi/2.png": "03b226c586a26e14fb73e1c74d7b7bd4",
"assets/assets/gyeongi/3.png": "c70f4f9d74ccbe37038c155c54d7b7dd",
"assets/assets/gyeongi/1.jpeg": "9f6560ae5a115a7014af0d630572a605",
"assets/assets/gangwon/2.png": "f20c80b5ed47bc247f5bf937ec651029",
"assets/assets/gangwon/3.png": "b0d295aec2dc0ef15bdd1ab156b84e81",
"assets/assets/gangwon/1.jpeg": "0e727ddc3b8ae078550307c79a94bb92",
"assets/assets/magazine_cover_images/003.png": "d7b24f9d35dc9d1bfbcaac730be53ae8",
"assets/assets/magazine_cover_images/004.png": "1771bb76cb39eb2102468db9df4de608",
"assets/assets/magazine_cover_images/000.png": "22a08e27bf932ad86c3b32d411760ed5",
"assets/assets/magazine_cover_images/002.png": "102469180cebc2467694026e5ce3e538",
"assets/assets/magazine_cover_images/001.png": "9778a3ce1755791d12c23b0a7b401132",
"assets/assets/magazine_main/magazine_background.png": "9e3bc0aeb036717b14c0aa2a144de147",
"assets/assets/magazine_main/paper_plane.png": "654a00485b3f0e031cd098252c7c6a2e",
"assets/assets/magazine_main/logo.png": "0eb07c03a43eeb4cae17d58db58212f8",
"assets/assets/magazine_main/drawer.png": "56d68c13bfd85b7deafe89470267ceb6",
"assets/assets/magazine_main/logo_white.png": "48837fa5f047a99d6d74407220509760",
"assets/assets/invalid_name.png": "08dd1e40328466b9a8473b0b64c0ab32",
"assets/assets/event.png": "97d224d88f03c8d65cf91c485189781c",
"assets/assets/after_rain/2.JPG": "a9bc075b2043bcc5ebcde9e3ec4300f9",
"assets/assets/after_rain/3.png": "a87e09bb0a62ed771dcb333be6da8983",
"assets/assets/after_rain/1.png": "39429ba380b2accaa54fa70539cbdaf0",
"assets/assets/light_rain/2.jpeg": "5f3c7ba807549c4d26ef1ce3ea5569b4",
"assets/assets/light_rain/3.jpeg": "38ab88ffe09fb16a4ddd1b3b62c721aa",
"assets/assets/light_rain/4.jpg": "dad01758a516a528647d2095fa9afbd6",
"assets/assets/light_rain/1.jpeg": "ece01359cf01a3c9a30cf98e5b6420b6",
"assets/assets/jeonla/2.png": "817500692dd3f3c59fa24011e7d6bba4",
"assets/assets/jeonla/3.png": "df2fc1426662a07be2ccbe2a45f5c795",
"assets/assets/jeonla/1.png": "f8324f4fe805a0772931fdf25e913de0",
"assets/assets/kingsejong.png": "27e9724e395fb96880be7ff6c9530bed",
"assets/assets/heavy_rain/2.png": "1dc781e7d00a7855f4a5e2b7e2e12dcc",
"assets/assets/heavy_rain/3.png": "4e7f409ec1f7f04c4af0cad1cc635702",
"assets/assets/heavy_rain/1.png": "9fa34bc4ea4984f90b3c36b9f81b1059",
"assets/assets/chung/3.JPG": "794b1a90d89391c720df12464180e49f",
"assets/assets/chung/1.jpg": "9ebb757622bc9711e62a94234fb6a092",
"assets/assets/chung/2.png": "38dfa9480961624d4932e1da0ac8c387",
"assets/assets/jeju/3.jpeg": "ece01359cf01a3c9a30cf98e5b6420b6",
"assets/assets/jeju/2.jpg": "ae0cd50567e1d69a70e4f9b2573a8f31",
"assets/assets/jeju/1.png": "63ac7ecfbeb23a22b9afb4608d772f94",
"assets/assets/yolo1/4.png": "754360fd2f3d3f8273def0be1e24ac7a",
"assets/assets/yolo1/6.png": "5a8fafbae13d12ffabd98b0d85b4b3e7",
"assets/assets/yolo1/7.png": "c5deb6da0afc8f5e9b948902a42986b9",
"assets/assets/yolo1/5.png": "2d4071b9c162c40fdf57a42be385ebc8",
"assets/assets/yolo1/2.png": "2b3cca00e4e22258aaae081ea88c31cb",
"assets/assets/yolo1/3.png": "51f882c9d3b6a451cfa41f305fffdae4",
"assets/assets/yolo1/1.png": "89b6bc165bd4d2afd4db0897540919ed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/NotoSansCJKkr/NotoSansKR-Medium.otf": "de132efeffa48aef0bf5bdfe1c4602f4",
"assets/fonts/NotoSansCJKkr/NotoSansKR-Black.otf": "aef8424b7c9ece17f01cbc8618e4723b",
"assets/fonts/NotoSansCJKkr/NotoSansKR-Regular.otf": "913f146b0200b19b17eb4de8b4427a9c",
"assets/fonts/NotoSansCJKkr/NotoSansKR-Bold.otf": "b59ac7cf449e57469daf2480fafbddf4",
"assets/fonts/Inter/static/Inter-Regular.ttf": "515cae74eee4925d56e6ac70c25fc0f6",
"assets/fonts/Inter/static/Inter-ExtraBold.ttf": "bd9525f1099e9f5845f6aef2956e9fb8",
"assets/NOTICES": "4a50d0d4d2d41316ff747f08d090efe1",
"assets/FontManifest.json": "c42b0d53b83853f7b0872011561ffc0b",
"assets/AssetManifest.json": "432da2e8cb217487fa671582948330c6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e0cb228224a11b6f0d6da96bdde9992a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "37db39c2a2cb6b51c55bdf492405489c",
"version.json": "56a467f92189608ae9e57b3f701bdc33"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
