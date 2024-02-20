"use client";

import { useId, useState } from "react";
import Link from "next/link";
import cx from "clsx";
// TODO: extract ripple from package
// @ts-ignore
import Ripple from "material-ripple-effects";
import { Transition } from "@headlessui/react";
import Hamburger from "../hamburger";
import Nav from "../nav";
import NavDropdown from "../nav-dropdown";
import { ArrowLeft, ChevronRight } from "../svgs";
import { Router } from "@/constants";

import styles from "./styles.module.css";

type State = "default" | "products" | "services" | "policies";

const Navbar = () => {
  const id = useId();
  const ripple = new Ripple();

  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((isOpen) => !isOpen);

  const handleClose = () => setOpen(false);

  const [active, setActive] = useState<State>("default");

  return (
    <Nav onClose={handleClose}>
      <Link href={Router.Home} className={cx(styles.navLink, styles.navHome)}>
        IMH
      </Link>

      <button
        className={styles.hamburger}
        onClick={toggle}
        onMouseDown={(e) => ripple.create(e, "light")}
        aria-controls={id}
        aria-expanded={open}
      >
        <Hamburger className="h-6 w-6" open={open} />
      </button>
      <div className="hidden md:flex">
        <Link
          href={Router.About}
          className={cx("block", styles.navLink)}
          onClick={handleClose}
        >
          About
        </Link>
        <Link
          href={Router.Contact}
          className={cx("block", styles.navLink)}
          onClick={handleClose}
        >
          Contact
        </Link>
        <Link
          href={Router.TechnicalHelp}
          className={cx("block", styles.navLink)}
          onClick={handleClose}
        >
          Technical Help
        </Link>
        <NavDropdown label="Policies">
          <Link
            href={Router.InclusionPolicy}
            className={cx("block", styles.navLink)}
          >
            Inclusion Policy
          </Link>
        </NavDropdown>
        <NavDropdown label="Products and Services">
          <span className={cx("block", styles.navLink)}>Products</span>
          <Link href={Router.Dent} className={cx("block", styles.navLink)}>
            Dent Instruments
          </Link>
          <Link href={Router.Dranetz} className={cx("block", styles.navLink)}>
            Dranetz
          </Link>
          <Link
            href={Router.Electrotek}
            className={cx("block", styles.navLink)}
          >
            Electrotek Systems
          </Link>
          <Link href={Router.Powerside} className={cx("block", styles.navLink)}>
            Powerside
          </Link>
          <div className="mx-3 border-b-2 border-gray-200" />
          <span className={cx("block", styles.navLink)}>Services</span>
          <Link
            href={Router.Consultancy}
            className={cx("block", styles.navLink)}
          >
            Consultancy from IMH
          </Link>
        </NavDropdown>
      </div>

      <div className="w-full md:hidden">
        <Transition
          show={open}
          className="grid md:hidden"
          enter="transition-[grid-template-rows] motion-reduce:transition-none duration-150"
          enterFrom="grid-rows-[0fr]"
          enterTo="grid-rows-[1fr]"
          leave="transition-[grid-template-rows] motion-reduce:transition-none duration-150"
          leaveFrom="grid-rows-[1fr]"
          leaveTo="grid-rows-[0fr]"
          afterLeave={() => setActive("default")}
        >
          <div
            id={id}
            className={cx(styles.transitionsContainer, "overflow-hidden")}
          >
            <Transition
              show={active === "default"}
              className="grid w-full"
              enter={cx(
                styles.defaultTransition,
                "motion-reduce:transition-none motion-reduce:duration-0",
              )}
              enterFrom="transform -translate-x-full grid-rows-[0fr]"
              enterTo="transform translate-x-0 grid-rows-[1fr]"
              leave={cx(
                styles.defaultTransition,
                "motion-reduce:transition-none motion-reduce:duration-0",
              )}
              leaveFrom="transform translate-x-0 grid-rows-[1fr]"
              leaveTo="transform -translate-x-full grid-rows-[0fr]"
            >
              <div className="overflow-hidden">
                <Link
                  href={Router.About}
                  className={cx("block", styles.navLink)}
                  onClick={handleClose}
                >
                  About
                </Link>
                <Link
                  href={Router.Contact}
                  className={cx("block", styles.navLink)}
                  onClick={handleClose}
                >
                  Contact
                </Link>
                <Link
                  href={Router.TechnicalHelp}
                  className={cx("block", styles.navLink)}
                  onClick={handleClose}
                >
                  Technical Help
                </Link>

                <NavDropdown label="Policies">
                  <Link
                    href={Router.InclusionPolicy}
                    className={cx("block", styles.navLink)}
                  >
                    Inclusion Policy
                  </Link>
                </NavDropdown>
                <NavDropdown label="Products and Services">
                  <span className={cx("block", styles.navLink)}>Products</span>
                  <Link
                    href={Router.Dent}
                    className={cx("block", styles.navLink)}
                  >
                    Dent Instruments
                  </Link>
                  <Link
                    href={Router.Dranetz}
                    className={cx("block", styles.navLink)}
                  >
                    Dranetz
                  </Link>
                  <Link
                    href={Router.Electrotek}
                    className={cx("block", styles.navLink)}
                  >
                    Electrotek Systems
                  </Link>
                  <Link
                    href={Router.Powerside}
                    className={cx("block", styles.navLink)}
                  >
                    Powerside
                  </Link>
                  <div className="mx-3 border-b-2 border-gray-200" />
                  <span className={cx("block", styles.navLink)}>Services</span>
                  <Link
                    href={Router.Consultancy}
                    className={cx("block", styles.navLink)}
                  >
                    Consultancy from IMH
                  </Link>
                </NavDropdown>

                <button
                  className={cx(
                    "flex items-center gap-x-2 text-left",
                    styles.navLink,
                  )}
                  onClick={() => {
                    setActive("policies");
                  }}
                >
                  Policies
                  <ChevronRight className="h-6 w-6" />
                </button>
                <button
                  className={cx(
                    "flex items-center gap-x-2 text-left",
                    styles.navLink,
                  )}
                  onClick={() => {
                    setActive("products");
                  }}
                >
                  Products
                  <ChevronRight className="h-6 w-6" />
                </button>
                <button
                  className={cx(
                    "flex items-center gap-x-2 text-left",
                    styles.navLink,
                  )}
                  onClick={() => {
                    setActive("services");
                  }}
                >
                  Services
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </Transition>

            <Transition
              show={active === "policies"}
              appear
              enter="transition-transform motion-reduce:transition-none ease-in-out duration-500 motion-reduce:duration-0"
              enterFrom="transform translate-x-full"
              enterTo="transform translate-x-0"
              leave="transition-transform motion-reduce:transition-none ease-in-out duration-500 motion-reduce:duration-0"
              leaveFrom="transform translate-x-0"
              leaveTo="transform translate-x-full"
            >
              <button
                className={cx("flex items-center gap-x-2", styles.navLink)}
                onClick={() => {
                  setActive("default");
                }}
              >
                <ArrowLeft className="h-6 w-6" />
                Go Back
              </button>
              <Link
                href={Router.InclusionPolicy}
                className={cx("block", styles.navLink)}
                onClick={handleClose}
              >
                Inclusion Policy
              </Link>
            </Transition>
            <Transition
              show={active === "products"}
              className="w-full"
              enter="transition-transform motion-reduce:transition-none ease-in-out duration-500 motion-reduce:duration-0"
              enterFrom="transform translate-x-full"
              enterTo="transform translate-x-0"
              leave="transition-transform motion-reduce:transition-none ease-in-out duration-500 motion-reduce:duration-0"
              leaveFrom="transform translate-x-0"
              leaveTo="transform translate-x-full"
            >
              <button
                className={cx("flex items-center gap-x-2", styles.navLink)}
                onClick={() => {
                  setActive("default");
                }}
              >
                <ArrowLeft className="h-6 w-6" />
                Go Back
              </button>
              <Link
                href={Router.Dent}
                className={cx("block", styles.navLink)}
                onClick={handleClose}
              >
                Dent Instruments
              </Link>
              <Link
                href={Router.Dranetz}
                className={cx("block", styles.navLink)}
                onClick={handleClose}
              >
                Dranetz
              </Link>
              <Link
                href={Router.Electrotek}
                className={cx("block", styles.navLink)}
                onClick={handleClose}
              >
                Electrotek Systems
              </Link>
              <Link
                href={Router.Powerside}
                className={cx("block", styles.navLink)}
                onClick={handleClose}
              >
                Powerside
              </Link>
            </Transition>
            <Transition
              show={active === "services"}
              appear
              className="w-full"
              enter="transition-transform motion-reduce:transition-none ease-in-out duration-500 motion-reduce:duration-0"
              enterFrom="transform translate-x-full"
              enterTo="transform translate-x-0"
              leave="transition-transform motion-reduce:transition-none ease-in-out duration-500 motion-reduce:duration-0"
              leaveFrom="transform translate-x-0"
              leaveTo="transform translate-x-full"
            >
              <button
                className={cx("flex items-center gap-x-2", styles.navLink)}
                onClick={() => {
                  setActive("default");
                }}
              >
                <ArrowLeft className="h-6 w-6" />
                Go Back
              </button>
              <Link
                href={Router.Consultancy}
                className={cx("block", styles.navLink)}
                onClick={handleClose}
              >
                Consultancy from IMH
              </Link>
            </Transition>
          </div>
        </Transition>
      </div>
    </Nav>
  );
};

export default Navbar;
