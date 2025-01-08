"use client";

import { useRef } from "react";
import type { FunctionComponent, ReactNode } from "react";
import { useClickAway } from "~/hooks";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
  onClose: () => void;
};

const Nav: FunctionComponent<Props> = ({ children, onClose }) => {
  const containerRef = useRef<HTMLElement>(null);

  useClickAway(containerRef, () => onClose());

  return (
    <>
      <a
        href="#main-content"
        className="sr-only left-10 top-28 bg-indigo-700 text-white focus:not-sr-only focus:absolute focus:px-6 focus:py-4"
      >
        Skip to Content
      </a>
      <nav className={styles.nav} ref={containerRef}>
        {children}
      </nav>
    </>
  );
};

export default Nav;
