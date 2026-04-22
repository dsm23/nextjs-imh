import type { FunctionComponent, PropsWithChildren } from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { GoogleTagManager } from "@next/third-parties/google";
import Layout from "~/components/layout";
import RegisterServiceWorker from "~/components/register-sw";
import Swetrix from "~/components/swetrix";
import { Toaster } from "~/components/ui/sonner";

import "~/styles/index.css";

export const metadata: Metadata = {
  title: "IMH",
};

export const viewport: Viewport = {
  themeColor: "#FFF",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const RootLayout: FunctionComponent<PropsWithChildren> = async ({
  children,
}) => {
  const nonce = (await headers()).get("csp-nonce");

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <Swetrix
          apiURL={`${process.env.SWETRIX_API_URL}/log`}
          projectId={process.env.SWETRIX_PROJECT_ID}
        />
        <RegisterServiceWorker />
        <GoogleTagManager
          gtmId={process.env.GOOGLE_TAG_MANAGER_ID}
          nonce={nonce ?? undefined}
        />
        <Toaster />
        <Layout>{children}</Layout>
        {/* HACK: Content-Security-Policy */}
        <div className="hidden">{nonce}</div>
      </body>
    </html>
  );
};

export default RootLayout;
