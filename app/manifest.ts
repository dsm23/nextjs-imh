import type { MetadataRoute } from "next";

const manifest = () =>
  ({
    name: "IMH Technologies",
    short_name: "IMH",
    description: "Next.js App",
    start_url: "/",
    display: "standalone",
    background_color: "#6d28d9",
    theme_color: "#fff",
    orientation: "portrait",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/android-chrome-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }) satisfies MetadataRoute.Manifest;

export default manifest;
