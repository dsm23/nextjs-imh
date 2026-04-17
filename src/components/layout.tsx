import type { FunctionComponent, PropsWithChildren } from "react";
import Navbar from "./navbar";

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <>
    <header className="contents">
      <Navbar />
    </header>
    <main className="mb-10">{children}</main>
  </>
);

export default Layout;
