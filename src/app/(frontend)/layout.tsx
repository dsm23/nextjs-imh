import type { FunctionComponent, ReactNode } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import type { Metadata, Viewport } from "next";
import Layout from "~/components/layout";
import RegisterServiceWorker from "~/components/register-sw";
import { Toaster } from "~/components/ui/sonner";

import "~/styles/index.css";

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
        <Toaster />
        <Layout preview={false}>{children}</Layout>
        {/* HACK: Content-Security-Policy */}
        <div className="hidden">{nonce}</div>
      </body>
    </html>
  );
};

export default RootLayout;
