/*jshint esversion: 6 */
var staticCacheName = 'rest-static-v4';

self.addEventListener('install', function(event) {
  // TODO: cache /skeleton rather than the root page

  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/css/styles.css',
        '/css/styles-responsive-restaurant.css',
        '/css/styles-responsive-index.css',
        '/data/restaurants.json',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/js/dbhelper.js',
        '/img/comp_mob/1.jpg',
        '/img/comp_mob/2.jpg',
        '/img/comp_mob/3.jpg',
        '/img/comp_mob/4.jpg',
        '/img/comp_mob/5.jpg',
        '/img/comp_mob/6.jpg',
        '/img/comp_mob/7.jpg',
        '/img/comp_mob/8.jpg',
        '/img/comp_mob/9.jpg',
        '/img/comp_mob/10.jpg',
        '/leaflet/leaflet.css',
        '/leaflet/leaflet.js'
      ]);
    })
  );
});

self.addEventListener('activate', event => {

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
            return cacheName.startsWith('restaurant-') &&
              cacheName != staticCache;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith (
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
