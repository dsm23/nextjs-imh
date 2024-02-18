import type { FunctionComponent, ReactNode } from "react";
import type { Viewport } from "next";
import Alert from "./alert";
import Navbar from "./navbar";

export const viewport: Viewport = {
  themeColor: "black",
};

type Props = {
  preview: boolean;
  children: ReactNode;
};

const Layout: FunctionComponent<Props> = ({ preview, children }) => (
  <>
    <Alert preview={preview} />
    <header className="contents">
      <Navbar />
    </header>
    <main>{children}</main>
  </>
);

export default Layout;
