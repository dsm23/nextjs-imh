import type { FunctionComponent, PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import type { Metadata } from "next";
import { AdminBar } from "~/components/AdminBar";
import Layout from "~/components/layout";
import { Providers } from "~/providers";
import { InitTheme } from "~/providers/Theme/InitTheme";
import { getServerSideURL } from "~/utilities/getURL";
import { mergeOpenGraph } from "~/utilities/mergeOpenGraph";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const RootLayout: FunctionComponent<PropsWithChildren> = async ({
  children,
}) => {
  const { isEnabled } = await draftMode();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Layout preview={false}>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: "summary_large_image",
    creator: "@payloadcms",
  },
};

export default RootLayout;
