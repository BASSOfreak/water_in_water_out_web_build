'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "2468527b231e83415be66f850964036d",
"assets/AssetManifest.json": "a0e243d5302bf00c6def5a25de7bd45c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "3ec63348310c868c890d4968266356e9",
"assets/assets/data/fountain_output.json": "8edcb2b8042a7c65d39c5579e381a0fd",
"assets/assets/data/map_tiles_bin/tile_5_54.bin": "257a107604bf9d1b36c192c79f681a91",
"assets/assets/data/map_tiles_bin/tile_5_53.bin": "6bb315ae3de37862486cd01beaecc9fe",
"assets/assets/data/map_tiles_bin/tile_6_125.bin": "2af4cc37bd8f8672bcf67fb986840811",
"assets/assets/data/map_tiles_bin/tile_5_31.bin": "e2b2fe6ce3b34e04c241a44507698849",
"assets/assets/data/map_tiles_bin/tile_6_122.bin": "d9061e2410ad802b4495502731734148",
"assets/assets/data/map_tiles_bin/tile_6_103.bin": "cf947888521d0d3862b5420db1f32e8e",
"assets/assets/data/map_tiles_bin/tile_3_13.bin": "6f8547dd3b4f8f2abaf2ffb9a16ceefb",
"assets/assets/data/map_tiles_bin/tile_4_24.bin": "8dca5e910c6845586b029b9da53d1cd6",
"assets/assets/data/map_tiles_bin/tile_6_112.bin": "d4a0e8488f34aa617a0e519eca5ae363",
"assets/assets/data/map_tiles_bin/tile_4_27.bin": "07560788bf8d558e4b21ca5645e52bfa",
"assets/assets/data/map_tiles_bin/tile_3_7.bin": "248ee68a38dd371f6194dd73010f9b22",
"assets/assets/data/map_tiles_bin/tile_6_77.bin": "db292af89411edfa92749669fdeaa2ef",
"assets/assets/data/map_tiles_bin/tile_6_97.bin": "11c38f9d544735fe1489369f184fe1e3",
"assets/assets/data/map_tiles_bin/tile_6_63.bin": "beb4b89916adca4bbd1cb3057683c484",
"assets/assets/data/map_tiles_bin/tile_6_94.bin": "f657e754a3f40659615c9708f7e5aca6",
"assets/assets/data/map_tiles_bin/tile_4_21.bin": "97fff5ae7d37ee6873f2b8da935af64c",
"assets/assets/data/map_tiles_bin/tile_6_104.bin": "28c04011ab9b1eaaffafc59fef1e0189",
"assets/assets/data/map_tiles_bin/tile_5_48.bin": "8eb63951f0ea9342a9c1b9002e63a966",
"assets/assets/data/map_tiles_bin/tile_6_65.bin": "faba321fd7ff55d0cf85a8cf6fd753e5",
"assets/assets/data/map_tiles_bin/tile_3_12.bin": "9a440112d874389ef9bf5b16d38a27ca",
"assets/assets/data/map_tiles_bin/tile_5_42.bin": "2b0a348cd5d2a87c0204066857ffea28",
"assets/assets/data/map_tiles_bin/tile_6_116.bin": "d0ad4fd6651d620854bfacf56b6184be",
"assets/assets/data/map_tiles_bin/tile_4_30.bin": "258f3f0af0f10e24e952d6d22cbe07fd",
"assets/assets/data/map_tiles_bin/tile_4_26.bin": "0bfd553b026a871dda8e67cb5d043e62",
"assets/assets/data/map_tiles_bin/tile_1_2.bin": "ecd50487e09a4b2a3478d3f28305471e",
"assets/assets/data/map_tiles_bin/tile_5_43.bin": "24870ba3a049d73cc498f25aa6255453",
"assets/assets/data/map_tiles_bin/tile_4_28.bin": "a1af5c35559fcc23216fbbc0760327e9",
"assets/assets/data/map_tiles_bin/tile_4_15.bin": "0a23467d83fdb678112184e208781eff",
"assets/assets/data/map_tiles_bin/tile_6_73.bin": "df635f21c30fed584c24f06a2e3656e5",
"assets/assets/data/map_tiles_bin/tile_4_19.bin": "19a245f4477d43e736c605caf58db097",
"assets/assets/data/map_tiles_bin/tile_2_6.bin": "4d603b8d06bc2768025da002086767b6",
"assets/assets/data/map_tiles_bin/tile_6_105.bin": "5b257b8316d4281cb8859d2f5da2bfcb",
"assets/assets/data/map_tiles_bin/tile_6_74.bin": "6f7d836ff59bf9e2f259ee0b608e7917",
"assets/assets/data/map_tiles_bin/tile_6_88.bin": "4a9f1d94f995507675cfc442731b3086",
"assets/assets/data/map_tiles_bin/tile_6_68.bin": "10e7fe3b4e0515c2eb3228f243b57fcf",
"assets/assets/data/map_tiles_bin/tile_6_84.bin": "6e80cba78c5b5159003dfa4a9aba6126",
"assets/assets/data/map_tiles_bin/tile_6_70.bin": "379522e507eef7efae8d2248cb9f8211",
"assets/assets/data/map_tiles_bin/tile_6_109.bin": "094c0724f76fac4ec4d5a556e7b56c50",
"assets/assets/data/map_tiles_bin/tile_5_60.bin": "6c37aa2b284c2bba99e5e9e14dc214e2",
"assets/assets/data/map_tiles_bin/tile_5_34.bin": "7675d2e68d8cc6254def55b8c354d35d",
"assets/assets/data/map_tiles_bin/tile_5_44.bin": "ea242d33c532b8f11b4d50d73e88711f",
"assets/assets/data/map_tiles_bin/tile_5_58.bin": "583818533e076a465174429ad7a4704a",
"assets/assets/data/map_tiles_bin/tile_3_14.bin": "787ffb78c4e3d297b24d7891a204b28c",
"assets/assets/data/map_tiles_bin/tile_6_107.bin": "2d156c4a3d83ecc8f1b3054cc8ce2247",
"assets/assets/data/map_tiles_bin/tile_0_0.bin": "c02383d7d2bfc7a8ab551058d0547373",
"assets/assets/data/map_tiles_bin/tile_4_20.bin": "ea71bea3262b7dddc9a983a71f416217",
"assets/assets/data/map_tiles_bin/tile_6_121.bin": "d90de1dcc7ae8a69087e4cc3981e6e0d",
"assets/assets/data/map_tiles_bin/tile_6_83.bin": "66c2fa018548dcb7c5bdb59c685752f0",
"assets/assets/data/map_tiles_bin/tile_5_39.bin": "e5bfde551ee97fcca660300aa66e049b",
"assets/assets/data/map_tiles_bin/tile_5_61.bin": "3484ee9688df698a0012b72befdbccc8",
"assets/assets/data/map_tiles_bin/tile_6_98.bin": "1c89244a1d508fc62795673284ebbe43",
"assets/assets/data/map_tiles_bin/tile_5_55.bin": "e29a9f27993484dc8ef70b4f0a343bbb",
"assets/assets/data/map_tiles_bin/tile_5_52.bin": "484b5fa446f64f4b3d3dd6c45ea872da",
"assets/assets/data/map_tiles_bin/tile_6_106.bin": "0aace6beb2fba85b74768de7326080b4",
"assets/assets/data/map_tiles_bin/tile_4_16.bin": "8e8d0b327fbb347de3a20c7607b7db53",
"assets/assets/data/map_tiles_bin/tile_5_47.bin": "6cf0f4381b313f1421ea5e76b6c787cd",
"assets/assets/data/map_tiles_bin/tile_6_69.bin": "1fe00eafb888c45e46856e5eac4251b0",
"assets/assets/data/map_tiles_bin/tile_6_89.bin": "6f125a484cc14e1b2d9ec5ff0407e66f",
"assets/assets/data/map_tiles_bin/tile_6_99.bin": "049f727899d7cab0bf78fc1f43335fd2",
"assets/assets/data/map_tiles_bin/tile_5_41.bin": "fd879af9bbc7bc674920eb80133d1e3e",
"assets/assets/data/map_tiles_bin/tile_6_100.bin": "0c824560674217e5998fd9f8ded4dfdf",
"assets/assets/data/map_tiles_bin/tile_6_96.bin": "43dfdeb6bff1b3f6cb8ad9106569d062",
"assets/assets/data/map_tiles_bin/tile_6_95.bin": "e961b6cee7ea909502c225504c627ead",
"assets/assets/data/map_tiles_bin/tile_5_59.bin": "74b2c264100010ceb690473e45f66043",
"assets/assets/data/map_tiles_bin/tile_6_75.bin": "34d6eef4e5d43f751ba32fb3b4154d3a",
"assets/assets/data/map_tiles_bin/tile_4_29.bin": "915441ad189b51c8828f1c2aba0bd2f8",
"assets/assets/data/map_tiles_bin/tile_5_32.bin": "282bea30087a221ba0d2d7d16438b436",
"assets/assets/data/map_tiles_bin/tile_6_78.bin": "ef3fee8fca56fb960a7f514fb5bf5b65",
"assets/assets/data/map_tiles_bin/tile_6_71.bin": "bea8fa4ec5371f7623166eeb363a7d47",
"assets/assets/data/map_tiles_bin/tile_6_126.bin": "444b8f2825c85d4b06e18d1c39330281",
"assets/assets/data/map_tiles_bin/tile_5_36.bin": "8526c5c22772b1d6ef649c5e8f6b0f9e",
"assets/assets/data/map_tiles_bin/tile_5_35.bin": "1ab2245025327485ff19879834f99321",
"assets/assets/data/map_tiles_bin/tile_6_66.bin": "dff88e5a85903b0009ef145a6223adff",
"assets/assets/data/map_tiles_bin/tile_5_46.bin": "8b5db3d48ba154bf5eb624ea07df3ef7",
"assets/assets/data/map_tiles_bin/tile_5_57.bin": "ed54963be7ff2e87f08255a40b223061",
"assets/assets/data/map_tiles_bin/tile_2_5.bin": "efd968a5135c0c735de115ec0e49b6c6",
"assets/assets/data/map_tiles_bin/tile_6_85.bin": "4db578e25a737a8ffdde5998ed4b1e5c",
"assets/assets/data/map_tiles_bin/tile_6_90.bin": "d1ce2ede39d213cf1074b37b98f2ff50",
"assets/assets/data/map_tiles_bin/tile_6_76.bin": "d0a4fab3f9aebf78037edd44d2752c26",
"assets/assets/data/map_tiles_bin/tile_6_87.bin": "886e26a2f14422b6049a8dc2dc98c52d",
"assets/assets/data/map_tiles_bin/tile_3_11.bin": "f2282d9e973d725b81366a71c296643d",
"assets/assets/data/map_tiles_bin/tile_6_101.bin": "3c42d6fa50ecc3c7b7aa790210935194",
"assets/assets/data/map_tiles_bin/tile_6_92.bin": "724da180c38f78ba9aa17810689e8ca4",
"assets/assets/data/map_tiles_bin/tile_4_17.bin": "dbe74a5f9d7e507bab39bbf26d8b6496",
"assets/assets/data/map_tiles_bin/tile_4_23.bin": "e812d7ffdc1b9e493372a61a76ded41d",
"assets/assets/data/map_tiles_bin/tile_6_110.bin": "c848f4ac57f322750549fec37b3f4cf8",
"assets/assets/data/map_tiles_bin/tile_3_10.bin": "bd34b29a8f32abe0a941c30fbafa5d7a",
"assets/assets/data/map_tiles_bin/tile_6_111.bin": "43ae2f6bba172f80b4978070bc85de0c",
"assets/assets/data/map_tiles_bin/tile_6_91.bin": "7eec8269d47704f943ab6b6956c56b43",
"assets/assets/data/map_tiles_bin/tile_6_93.bin": "a38f15cf5133ed92415c85525811f14c",
"assets/assets/data/map_tiles_bin/tile_5_50.bin": "38cec44f28255ac7618237cd5fefb0ab",
"assets/assets/data/map_tiles_bin/tile_5_45.bin": "b9b8c73afca1675882f25aed4f5feef8",
"assets/assets/data/map_tiles_bin/tile_6_108.bin": "69633e068029ef263b5b37caa6bae0b1",
"assets/assets/data/map_tiles_bin/tile_6_64.bin": "4ad0e2b11a654e9f0098a12174c394e3",
"assets/assets/data/map_tiles_bin/tile_6_114.bin": "361d53ca7b3226a9bef2e489a5f9ecbc",
"assets/assets/data/map_tiles_bin/tile_2_3.bin": "7a7106c20be7d0590e32f87b493df240",
"assets/assets/data/map_tiles_bin/tile_4_22.bin": "cf34c3ed46a71a0903ccba76269033dd",
"assets/assets/data/map_tiles_bin/tile_5_37.bin": "8c57bf8bb372965c4305b2b8535927b9",
"assets/assets/data/map_tiles_bin/tile_6_119.bin": "02382cd758f19989149d55c6781fef4c",
"assets/assets/data/map_tiles_bin/tile_6_124.bin": "8b82ae96dd9258745701e17eb6730ed1",
"assets/assets/data/map_tiles_bin/tile_1_1.bin": "60a14e28c4906ca7110ef2f053374622",
"assets/assets/data/map_tiles_bin/tile_2_4.bin": "969d60c375c121f8caf247757eb4b2e3",
"assets/assets/data/map_tiles_bin/tile_6_80.bin": "07ace9444b89435368d4611b21002d2d",
"assets/assets/data/map_tiles_bin/tile_6_82.bin": "6d98ce8a0cc93621e3fb454954def0c6",
"assets/assets/data/map_tiles_bin/tile_6_86.bin": "a47aae768da4c5c4e4cd7a6ea866a569",
"assets/assets/data/map_tiles_bin/tile_5_56.bin": "2596489127ca61ba88c94a12913e904e",
"assets/assets/data/map_tiles_bin/tile_5_38.bin": "9e39e5578ef226f213d97fbfdeb33a23",
"assets/assets/data/map_tiles_bin/tile_6_113.bin": "2cf2af4c33f6bc2aadf910a4880431ce",
"assets/assets/data/map_tiles_bin/tile_3_9.bin": "0c8c7c54ccfd51a944c88a848d4dfb1f",
"assets/assets/data/map_tiles_bin/tile_5_33.bin": "a8ade6d1c3fd8270e25a0535e5c2fe77",
"assets/assets/data/map_tiles_bin/tile_6_79.bin": "bda8daf09d4ec9e2d41fc653b245770e",
"assets/assets/data/map_tiles_bin/tile_6_81.bin": "c3511c2eefc6562846aac914d0ea6c95",
"assets/assets/data/map_tiles_bin/tile_4_18.bin": "0a879caa40f6f8ba2198e8e407545a7a",
"assets/assets/data/map_tiles_bin/tile_3_8.bin": "345759c41ab6ba1cba8943c4f756f51a",
"assets/assets/data/map_tiles_bin/tile_6_72.bin": "d587aa2b6162d6d14b002fa1faa5e2fd",
"assets/assets/data/map_tiles_bin/tile_6_118.bin": "54f8028c44973aaa4bc408297226d52a",
"assets/assets/data/map_tiles_bin/tile_6_117.bin": "7e80b37555dee1ad8fb12e0c18d2b3cd",
"assets/assets/data/map_tiles_bin/tile_6_67.bin": "3aa8183a775669165e5599258a72af28",
"assets/assets/data/map_tiles_bin/tile_6_102.bin": "ce6248d071e5d70e72e6976aeeeff4d5",
"assets/assets/data/map_tiles_bin/tile_6_115.bin": "4912e95908ee7738a405c3ac5e60b4c5",
"assets/assets/data/map_tiles_bin/tile_5_62.bin": "4b626f87446e0f51c46cd3011cb744b8",
"assets/assets/data/map_tiles_bin/tile_5_49.bin": "504f2601fa750366426f384add16fcfe",
"assets/assets/data/map_tiles_bin/tile_6_123.bin": "7d053acca5553839bd0b5eb89fbc20ef",
"assets/assets/data/map_tiles_bin/tile_5_40.bin": "d30114678f64db8f4b90fe46819c22c9",
"assets/assets/data/map_tiles_bin/tile_4_25.bin": "230c143e4b9eee84fec325c9ad87644b",
"assets/assets/data/map_tiles_bin/tile_6_120.bin": "c948ae774928fd11b3c0cffd749636ed",
"assets/assets/data/map_tiles_bin/tile_5_51.bin": "051a4881e7ba6fa3d1a3a258aeff95b9",
"assets/assets/data/output.json": "24c7e4935d237191907837c4e7a3d151",
"assets/assets/data/toilet_output.json": "6bad1c4166e6c09fa8a043221c549970",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/AssetManifest.bin.json": "c21fc595c53929fac4cb0622e193eb60",
"assets/AssetManifest.bin": "a3ece2ee1e9c1c68360a55785210b26a",
"assets/fonts/MaterialIcons-Regular.otf": "5e5521cd80cefca53ea485d6dc31933e",
"manifest.json": "5ec2acc978fbfbe545ae565520210e15",
"version.json": "1e5b7a9919bb2fab5ae2292670c82cc9",
"flutter_bootstrap.js": "19e24c6f35b6971c606a16ae92f4c6ce",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "54a6d467cbbfe32015a15ebed127e0b8",
"/": "54a6d467cbbfe32015a15ebed127e0b8"};
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
