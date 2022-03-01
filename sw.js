self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('webstories').then((cache) => cache.addAll([
      './',
    './index.html',
    './style.css',
     'manifest.webmanifest',
     'sw.js',
      'index.js',
      '404.html',
      'profile.html',
    './android-icon-192x192.png',
    './android-icon-512x512.png',
    './logo.png'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
