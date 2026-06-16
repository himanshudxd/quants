const CACHE_NAME = 'sovereign-quants-cache-v1';
const ASSETS_TO_CACHE = [
  './index.html',
  './favicon.ico',
  './questions.js',
  './questions_profit-loss.js',
  './questions_partnership.js',
  './questions_mixture.js',
  './questions_percentage.js',
  './questions_ratio.js',
  './questions_time-work.js',
  './questions_average.js',
  './questions_ages.js',
  './questions_si-ci.js',
  './questions_pipe-cistern.js',
  './questions_time-speed-distance.js',
  './questions_mensuration.js',
  './questions_boats-stream.js',
  './questions_permutation-combination.js',
  './questions_probability.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap'
];



// Install Service Worker and cache essential files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activate Service Worker and clear old cache versions
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Intercept requests and serve from cache if offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(e.request).catch(() => {
          // If offline fetch fails and request is for page, return index.html
          if (e.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
