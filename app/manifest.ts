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
        src: "/wifi.svg",
        sizes: "48x48 72x72 96x96 128x128 256x256 512x512",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/wifi.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }) satisfies MetadataRoute.Manifest;

export default manifest;
