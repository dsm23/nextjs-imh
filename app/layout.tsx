import type { FunctionComponent, ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "@/styles/index.css";
import Layout from "@/components/layout";
import RegisterServiceWorker from "@/components/register-sw";

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

const RootLayout: FunctionComponent<Props> = ({ children }) => (
  <html lang="en">
    <body className={`${inter.variable} font-sans`}>
      <RegisterServiceWorker />
      <Layout preview={false}>{children}</Layout>
    </body>
  </html>
);

export default RootLayout;
