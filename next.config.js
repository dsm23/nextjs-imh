/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const imgCdn = `https://images.ctfassets.net/${process.env.CONTENTFUL_SPACE_ID}/`;

const ContentSecurityPolicy = `
  default-src 'none';
  child-src blob: ;
  script-src 'self'${
    process.env.NODE_ENV === "development"
      ? " 'unsafe-inline' 'unsafe-eval'"
      : ""
  };
  prefetch-src 'self';
  img-src 'self' data: blob: ${imgCdn};
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  connect-src 'self' ${imgCdn} https://graphql.contentful.com/content/v1/spaces/ https://*.tiles.mapbox.com https://api.mapbox.com https://events.mapbox.com;
  manifest-src 'self';
  worker-src 'self' blob:;
  upgrade-insecure-requests;
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
];

// module.exports = withPWA({
module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    loader: "custom",
  },
};
// })
