if (!self.define) {
  let e,
    s = {};
  const a = (a, c) => (
    (a = new URL(a + ".js", c).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, n) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let r = {};
    const t = (e) => a(e, i),
      f = { module: { uri: i }, exports: r, require: t };
    s[i] = Promise.all(c.map((e) => f[e] || t(e))).then((e) => (n(...e), r));
  };
}
define(["./workbox-7028bf80"], function (e) {
  "use strict";
  importScripts("fallback-3V9m16AaQz8mNmRDGnWw9.js"),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/3V9m16AaQz8mNmRDGnWw9/_buildManifest.js",
          revision: "556252754a19af72ac7aa65554337d66",
        },
        {
          url: "/_next/static/3V9m16AaQz8mNmRDGnWw9/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/305-0c252ddc29c04975.js",
          revision: "0c252ddc29c04975",
        },
        {
          url: "/_next/static/chunks/330-aeedfb68ca86519c.js",
          revision: "aeedfb68ca86519c",
        },
        {
          url: "/_next/static/chunks/52c898e9-a9d042ff30f9605e.js",
          revision: "a9d042ff30f9605e",
        },
        {
          url: "/_next/static/chunks/581-db852e0f2f4e4952.js",
          revision: "db852e0f2f4e4952",
        },
        {
          url: "/_next/static/chunks/framework-8d78bf989db74c8f.js",
          revision: "8d78bf989db74c8f",
        },
        {
          url: "/_next/static/chunks/main-a5d613a53c724620.js",
          revision: "a5d613a53c724620",
        },
        {
          url: "/_next/static/chunks/pages/%5Bslug%5D-776103e195734191.js",
          revision: "776103e195734191",
        },
        {
          url: "/_next/static/chunks/pages/_app-2f73c669e86df77e.js",
          revision: "2f73c669e86df77e",
        },
        {
          url: "/_next/static/chunks/pages/_error-a4b51cf39a940e5d.js",
          revision: "a4b51cf39a940e5d",
        },
        {
          url: "/_next/static/chunks/pages/_offline-611c07b486f8aa76.js",
          revision: "611c07b486f8aa76",
        },
        {
          url: "/_next/static/chunks/pages/contact-8469088774fd1a07.js",
          revision: "8469088774fd1a07",
        },
        {
          url: "/_next/static/chunks/pages/david-murdoch-9e528cd6ec97ae75.js",
          revision: "9e528cd6ec97ae75",
        },
        {
          url: "/_next/static/chunks/pages/index-6a551576a7c05f35.js",
          revision: "6a551576a7c05f35",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-59c5c889f52620d6.js",
          revision: "59c5c889f52620d6",
        },
        {
          url: "/_next/static/css/344c50fe2c1ceb83.css",
          revision: "344c50fe2c1ceb83",
        },
        {
          url: "/_next/static/css/de98b0d5e93635b4.css",
          revision: "de98b0d5e93635b4",
        },
        {
          url: "/_next/static/css/e18bd9d1598cb5fe.css",
          revision: "e18bd9d1598cb5fe",
        },
        {
          url: "/_next/static/media/2aaf0723e720e8b9.p.woff2",
          revision: "e1b9f0ecaaebb12c93064cd3c406f82b",
        },
        {
          url: "/_next/static/media/9c4f34569c9b36ca.woff2",
          revision: "2c1fc211bf5cca7ae7e7396dc9e4c824",
        },
        {
          url: "/_next/static/media/ae9ae6716d4f8bf8.woff2",
          revision: "b0c49a041e15bdbca22833f1ed5cfb19",
        },
        {
          url: "/_next/static/media/b1db3e28af9ef94a.woff2",
          revision: "70afeea69c7f52ffccde29e1ea470838",
        },
        {
          url: "/_next/static/media/b967158bc7d7a9fb.woff2",
          revision: "08ccb2a3cfc83cf18d4a3ec64dd7c11b",
        },
        {
          url: "/_next/static/media/c0f5ec5bbf5913b7.woff2",
          revision: "8ca5bc1cd1579933b73e51ec9354eec9",
        },
        {
          url: "/_next/static/media/d1d9458b69004127.woff2",
          revision: "9885d5da3e4dfffab0b4b1f4a259ca27",
        },
        { url: "/_offline", revision: "3V9m16AaQz8mNmRDGnWw9" },
        {
          url: "/favicon/android-chrome-192x192.png",
          revision: "459dac2113348dfadd8e0a96e4f39dc9",
        },
        {
          url: "/favicon/android-chrome-512x512.png",
          revision: "1dd09f49a871135445f7bd7946c66676",
        },
        {
          url: "/favicon/apple-touch-icon.png",
          revision: "7d8281986da8db9c1b5413570ecc1f83",
        },
        {
          url: "/favicon/browserconfig.xml",
          revision: "765146e15223505546b54d3db36babf3",
        },
        {
          url: "/favicon/favicon-16x16.png",
          revision: "12b1cab2ce8a716a075f33cffcc9bc97",
        },
        {
          url: "/favicon/favicon-32x32.png",
          revision: "096850f15c19cf78da22a61a7fc60b53",
        },
        {
          url: "/favicon/favicon.ico",
          revision: "aaa3368a9b5804c3f3cbd6b6f8e17dcc",
        },
        {
          url: "/favicon/mstile-150x150.png",
          revision: "fc5bd63ac943de622b000d45404f070c",
        },
        {
          url: "/favicon/safari-pinned-tab.svg",
          revision: "40c9bc99e963fb841cd147f0374682fe",
        },
        {
          url: "/favicon/site.webmanifest",
          revision: "6314e7b3f29a9426889c667f0a7c9f3a",
        },
        { url: "/manifest.json", revision: "cb5d82113725c6b6ec44b350804c4717" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: c,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    );
});
