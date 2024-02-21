import type { FunctionComponent, ReactNode } from "react";
import Alert from "./alert";
import Navbar from "./navbar";

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
