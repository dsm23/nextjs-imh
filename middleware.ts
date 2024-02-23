import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const imgCdn = `https://images.ctfassets.net/${process.env.CONTENTFUL_SPACE_ID}/`;

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  // https://docs.mapbox.com/mapbox-gl-js/guides/browsers-and-testing/#csp-directives
  const cspHeader = `
    default-src 'none';
    script-src 'self' 'unsafe-eval' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data: ${imgCdn};
    font-src 'self';
    worker-src 'self' blob:;
    child-src blob:;
    connect-src 'self' https://graphql.contentful.com/content/v1/spaces/ https://*.tiles.mapbox.com https://api.mapbox.com https://events.mapbox.com;
    manifest-src 'self';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue,
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue,
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
