import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  // https://docs.mapbox.com/mapbox-gl-js/guides/browsers-and-testing/#csp-directives
  const cspHeader = `
    default-src 'none';
    script-src 'strict-dynamic' 'nonce-${nonce}' https://tagmanager.google.com https://*.googletagmanager.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.g.doubleclick.net https://*.googletagmanager.com https://*.google.com;
    img-src 'self' blob: data: https://ssl.gstatic.com https://www.gstatic.com https://*.google-analytics.com https://*.googletagmanager.com;
    font-src 'self' data: https://fonts.gstatic.com;
    worker-src 'self' blob:;
    child-src blob:;
    connect-src 'self' https://api.resend.com/emails https://*.tiles.mapbox.com https://api.mapbox.com https://events.mapbox.com https://pagead2.googlesyndication.com https://*.g.doubleclick.net https://*.google-analytics.com https://*.google.com https://*.googletagmanager.com;
    manifest-src 'self';
    base-uri 'self';
    form-action 'self';
    frame-src 'self' https://www.googletagmanager.com;
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
