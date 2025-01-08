import { useState } from "react";
import type { FunctionComponent, ReactNode } from "react";
import { Transition } from "@headlessui/react";
import cn from "~/lib/class-names";
import styles from "../navbar/styles.module.css";
import { ChevronDown } from "../svgs";

type Props = {
  children: ReactNode;
  label: string;
};

const NavDropdown: FunctionComponent<Props> = ({ children, label }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className="relative contents sm:block"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <button
        className={cn(
          "hidden sm:inline-flex sm:justify-between sm:gap-x-2",
          styles.navLink,
        )}
        onClick={toggle}
      >
        {label} <ChevronDown className="h-6 w-6" />
      </button>

      <Transition show={open}>
        <div
          className={cn([
            "data-transition:transition transform",

            "data-[enter]:duration-100 data-[enter]:ease-out",
            "data-[leave]:duration-75 data-[leave]:ease-in",

            "data-[enter]:data-[closed]:scale-90 data-[enter]:scale-100 data-[enter]:data-[closed]:opacity-0 data-[enter]:opacity-100",
            "data-[leave]:data-[closed]:scale-90 data-[leave]:scale-100 data-[leave]:data-[closed]:opacity-0 data-[leave]:opacity-100",
          ])}
        >
          <div className={styles.dropdown}>{children}</div>
        </div>
      </Transition>
    </div>
  );
};

export default NavDropdown;
