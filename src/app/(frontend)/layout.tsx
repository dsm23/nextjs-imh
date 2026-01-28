import type { FunctionComponent, ReactNode } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";

import "~/styles/index.css";

import { headers } from "next/headers";
import Layout from "~/components/layout";
import RegisterServiceWorker from "~/components/register-sw";

export const metadata: Metadata = {
  title: "IMH",
};

export const viewport: Viewport = {
  themeColor: "#FFF",
};

type Props = {
  children: ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const RootLayout: FunctionComponent<Props> = async ({ children }) => {
  const nonce = (await headers()).get("csp-nonce");

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <RegisterServiceWorker />
        <GoogleTagManager
          gtmId={process.env.GOOGLE_TAG_MANAGER_ID}
          nonce={nonce ?? undefined}
        />
        <Layout preview={false}>{children}</Layout>
        {/* HACK: Content-Security-Policy */}
        <div className="hidden">{nonce}</div>
      </body>
    </html>
  );
};

export default RootLayout;
