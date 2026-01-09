self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('studentos').then(cache => {
      return cache.addAll([
        './',
        './index.html'
      ]);
    })
  );
});