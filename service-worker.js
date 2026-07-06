const CACHE_NAME = "robin-nfc-cache";

const urlsToCache = [

"/",

"/style.css",

"/a1.html",
"/b1.html",
"/c1.html",
"/d1.html",
"/e1.html",

"/a2.html",
"/b2.html",
"/c2.html",
"/d2.html",
"/e2.html",

"/a3.html",
"/b3.html",
"/c3.html",
"/d3.html",
"/e3.html",

"/a4.html",
"/b4.html",
"/c4.html",
"/d4.html",
"/e4.html",

"/images/a1.png",
"/images/b1.png",
"/images/c1.png",
"/images/d1.png",
"/images/e1.png",

"/images/a2.png",
"/images/b2.png",
"/images/c2.png",
"/images/d2.png",
"/images/e2.png",

"/images/a3.png",
"/images/b3.png",
"/images/c3.png",
"/images/d3.png",
"/images/e3.png",

"/images/a4.png",
"/images/b4.png",
"/images/c4.png",
"/images/d4.png",
"/images/e4.png"
];

self.addEventListener("install", event => {
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => cache.addAll(urlsToCache))
);
});

self.addEventListener("fetch", event => {
event.respondWith(
caches.match(event.request)
.then(response => {
return response || fetch(event.request);
})
);
});
