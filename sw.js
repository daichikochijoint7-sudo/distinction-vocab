// Distinction PWA Service Worker
const CACHE_NAME = 'distinction-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // 通常のネットワーク通信を優先して処理
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
