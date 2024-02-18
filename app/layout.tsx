import type { FunctionComponent, ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/index.css";
import Layout from "@/components/layout";

export const metadata: Metadata = {
  title: "IMH",
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
      <Layout preview={false}>{children}</Layout>
    </body>
  </html>
);

export default RootLayout;
