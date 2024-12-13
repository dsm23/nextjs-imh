import { generateSW } from "workbox-build";

generateSW({
  globDirectory: "public/",
  globPatterns: ["**/*.{js,png,xml,ico,svg,webmanifest}"],
  swDest: "public/sw.js",
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
});
