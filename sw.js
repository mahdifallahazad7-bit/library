// Minimal service worker: needed only so browsers offer "install".
// It does NOT cache anything, so the library always loads fresh data.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
