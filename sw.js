

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('webstories').then((cache) => cache.addAll([
      '/',
    './index.html',
    'manifest.webmanifest',
     'sw.js',
      'index.js',
      '404.html',
      './images/icon_192.png',
     './images/icon_512.png'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
