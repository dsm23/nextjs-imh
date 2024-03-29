import { Fragment, useState } from "react";
import type { FunctionComponent, ReactNode } from "react";
import { Transition } from "@headlessui/react";
import { ChevronDown } from "../svgs";
import cn from "@/lib/class-names";

import styles from "../navbar/styles.module.css";

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

      <Transition
        as={Fragment}
        show={open}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className={styles.dropdown}>{children}</div>
      </Transition>
    </div>
  );
};

export default NavDropdown;
