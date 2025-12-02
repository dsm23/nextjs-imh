"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import Ripple from "material-ripple-effects";
import { Router } from "~/constants";
import cn from "~/lib/class-names";
import Hamburger from "../hamburger";
import Nav from "../nav";
import NavDropdown from "../nav-dropdown";
import { ArrowLeft, ChevronRight } from "../svgs";
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
      <Link href={Router.Home} className={cn(styles.navLink, styles.navHome)}>
        IMH
      </Link>

      <button
        className={styles.hamburger}
        onClick={toggle}
        onMouseDown={(e) => ripple.create(e, "light")}
        aria-controls={id}
        aria-expanded={open}
      >
        <span className="sr-only">Menu</span>
        <Hamburger className="size-6" open={open} />
      </button>
      <div className="hidden md:flex">
        <Link
          href={Router.About}
          className={cn("block", styles.navLink)}
          onClick={handleClose}
        >
          About
        </Link>
        <Link
          href={Router.Contact}
          className={cn("block", styles.navLink)}
          onClick={handleClose}
        >
          Contact
        </Link>
        <Link
          href={Router.TechnicalHelp}
          className={cn("block", styles.navLink)}
          onClick={handleClose}
        >
          Technical Help
        </Link>
        <NavDropdown label="Policies">
          <Link
            href={Router.InclusionPolicy}
            className={cn("block", styles.navLink)}
          >
            Inclusion Policy
          </Link>
        </NavDropdown>
        <NavDropdown label="Products and Services">
          <span className={cn("block", styles.navLink)}>Products</span>
          <Link href={Router.Dent} className={cn("block", styles.navLink)}>
            Dent Instruments
          </Link>
          <Link href={Router.Dranetz} className={cn("block", styles.navLink)}>
            Dranetz
          </Link>
          <Link
            href={Router.Electrotek}
            className={cn("block", styles.navLink)}
          >
            Electrotek Systems
          </Link>
          <Link href={Router.Powerside} className={cn("block", styles.navLink)}>
            Powerside
          </Link>
          <div className="mx-3 border-b-2 border-gray-200" />
          <span className={cn("block", styles.navLink)}>Services</span>
          <Link
            href={Router.Consultancy}
            className={cn("block", styles.navLink)}
          >
            Consultancy from IMH
          </Link>
        </NavDropdown>
      </div>

      <div className="w-full md:hidden">
        <Transition show={open} afterLeave={() => setActive("default")}>
          <div
            className={cn(
              "grid transform motion-reduce:transition-none motion-reduce:duration-0",
              "data:[transition]:duration-150 data-transition:transition-[grid-template-rows]",
              "data-enter:grid-rows-[1fr] data-enter:data-closed:grid-rows-[0fr]",
              "data-leave:grid-rows-[1fr] data-leave:data-closed:grid-rows-[0fr]",
            )}
          >
            <div
              id={id}
              className={cn(styles.transitionsContainer, "overflow-hidden")}
            >
              <Transition show={active === "default"}>
                <div
                  className={cn(
                    styles.defaultTransition,

                    "transform overflow-hidden motion-reduce:transition-none motion-reduce:duration-0",
                    "data-transition:duration-500",
                    "data-enter:translate-x-0 data-enter:data-closed:-translate-x-full",
                    "data-leave:translate-x-0 data-leave:data-closed:-translate-x-full",
                  )}
                >
                  <div className="overflow-hidden">
                    <Link
                      href={Router.About}
                      className={cn("block", styles.navLink)}
                      onClick={handleClose}
                    >
                      About
                    </Link>
                    <Link
                      href={Router.Contact}
                      className={cn("block", styles.navLink)}
                      onClick={handleClose}
                    >
                      Contact
                    </Link>
                    <Link
                      href={Router.TechnicalHelp}
                      className={cn("block", styles.navLink)}
                      onClick={handleClose}
                    >
                      Technical Help
                    </Link>

                    <NavDropdown label="Policies">
                      <Link
                        href={Router.InclusionPolicy}
                        className={cn("block", styles.navLink)}
                      >
                        Inclusion Policy
                      </Link>
                    </NavDropdown>
                    <NavDropdown label="Products and Services">
                      <span className={cn("block", styles.navLink)}>
                        Products
                      </span>
                      <Link
                        href={Router.Dent}
                        className={cn("block", styles.navLink)}
                      >
                        Dent Instruments
                      </Link>
                      <Link
                        href={Router.Dranetz}
                        className={cn("block", styles.navLink)}
                      >
                        Dranetz
                      </Link>
                      <Link
                        href={Router.Electrotek}
                        className={cn("block", styles.navLink)}
                      >
                        Electrotek Systems
                      </Link>
                      <Link
                        href={Router.Powerside}
                        className={cn("block", styles.navLink)}
                      >
                        Powerside
                      </Link>
                      <div className="mx-3 border-b-2 border-gray-200" />
                      <span className={cn("block", styles.navLink)}>
                        Services
                      </span>
                      <Link
                        href={Router.Consultancy}
                        className={cn("block", styles.navLink)}
                      >
                        Consultancy from IMH
                      </Link>
                    </NavDropdown>

                    <button
                      className={cn(
                        "flex items-center gap-x-2 text-left",
                        styles.navLink,
                      )}
                      onClick={() => {
                        setActive("policies");
                      }}
                    >
                      Policies
                      <ChevronRight className="size-6" />
                    </button>
                    <button
                      className={cn(
                        "flex items-center gap-x-2 text-left",
                        styles.navLink,
                      )}
                      onClick={() => {
                        setActive("products");
                      }}
                    >
                      Products
                      <ChevronRight className="size-6" />
                    </button>
                    <button
                      className={cn(
                        "flex items-center gap-x-2 text-left",
                        styles.navLink,
                      )}
                      onClick={() => {
                        setActive("services");
                      }}
                    >
                      Services
                      <ChevronRight className="size-6" />
                    </button>
                  </div>
                </div>
              </Transition>

              <Transition show={active === "policies"} appear>
                <div
                  className={cn(
                    "w-full transform overflow-hidden motion-reduce:transition-none motion-reduce:duration-0",
                    "data-transition:duration-500",
                    "data-enter:translate-x-0 data-enter:data-closed:translate-x-full",
                    "data-leave:translate-x-0 data-leave:data-closed:translate-x-full",
                  )}
                >
                  <button
                    className={cn("flex items-center gap-x-2", styles.navLink)}
                    onClick={() => {
                      setActive("default");
                    }}
                  >
                    <ArrowLeft className="size-6" />
                    Go Back
                  </button>
                  <Link
                    href={Router.InclusionPolicy}
                    className={cn("block", styles.navLink)}
                    onClick={handleClose}
                  >
                    Inclusion Policy
                  </Link>
                </div>
              </Transition>
              <Transition show={active === "products"}>
                <div
                  className={cn(
                    "w-full transform overflow-hidden motion-reduce:transition-none motion-reduce:duration-0",
                    "data-transition:duration-500",
                    "data-enter:translate-x-0 data-enter:data-closed:translate-x-full",
                    "data-leave:translate-x-0 data-leave:data-closed:translate-x-full",
                  )}
                >
                  <button
                    className={cn("flex items-center gap-x-2", styles.navLink)}
                    onClick={() => {
                      setActive("default");
                    }}
                  >
                    <ArrowLeft className="size-6" />
                    Go Back
                  </button>
                  <Link
                    href={Router.Dent}
                    className={cn("block", styles.navLink)}
                    onClick={handleClose}
                  >
                    Dent Instruments
                  </Link>
                  <Link
                    href={Router.Dranetz}
                    className={cn("block", styles.navLink)}
                    onClick={handleClose}
                  >
                    Dranetz
                  </Link>
                  <Link
                    href={Router.Electrotek}
                    className={cn("block", styles.navLink)}
                    onClick={handleClose}
                  >
                    Electrotek Systems
                  </Link>
                  <Link
                    href={Router.Powerside}
                    className={cn("block", styles.navLink)}
                    onClick={handleClose}
                  >
                    Powerside
                  </Link>
                </div>
              </Transition>
              <Transition show={active === "services"} appear>
                <div
                  className={cn(
                    "w-full transform overflow-hidden motion-reduce:transition-none motion-reduce:duration-0",
                    "data-transition:duration-500",
                    "data-enter:translate-x-0 data-enter:data-closed:translate-x-full",
                    "data-leave:translate-x-0 data-leave:data-closed:translate-x-full",
                  )}
                >
                  <button
                    className={cn("flex items-center gap-x-2", styles.navLink)}
                    onClick={() => {
                      setActive("default");
                    }}
                  >
                    <ArrowLeft className="size-6" />
                    Go Back
                  </button>
                  <Link
                    href={Router.Consultancy}
                    className={cn("block", styles.navLink)}
                    onClick={handleClose}
                  >
                    Consultancy from IMH
                  </Link>
                </div>
              </Transition>
            </div>
          </div>
        </Transition>
      </div>
    </Nav>
  );
};

export default Navbar;
