"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import cx from "clsx";
// TODO: extract ripple from package
// @ts-ignore
import Ripple from "material-ripple-effects";
import { Transition } from "@headlessui/react";
import { easing } from "ts-easing";
import resolveConfig from "tailwindcss/resolveConfig";
import { KeyValuePair } from "tailwindcss/types/config.js"; // import { ResizeObserver } from 'resize-observer';
import tailwindConfig from "../../tailwind.config.js";
import Hamburger from "../hamburger";
import NavDropdown from "../nav-dropdown";
import { ArrowLeft, ChevronRight } from "../svgs";
import { Router } from "@/constants";
import { useClickAway, useMedia, useTween } from "@/hooks";

import styles from "./styles.module.css";

type State = "default" | "products" | "services" | "policies";

const fullConfig = resolveConfig(tailwindConfig);

const Navbar = () => {
  const ripple = new Ripple();

  const [mobileOpen, setMobileOpen] = useState(false);

  const transitionContainer = useRef<HTMLDivElement>(null);

  const isMobile = useMedia(
    `(max-width: ${
      (fullConfig.theme?.screens as KeyValuePair<string, string>)?.md as string
    })`,
  );

  const toggle = () => setMobileOpen((isMobileOpen) => !isMobileOpen);

  const handleClose = () => setMobileOpen(false);

  const [active, setActive] = useState<State>("default");

  const [transitionHeight, setTransitionHeight] = useTween(0, {
    easing: easing.inOutCirc,
    duration: 300,
  });

  const containerRef = useRef<HTMLElement>(null);
  const defaultTransition = useRef<HTMLDivElement>(null);
  const policiesTransition = useRef<HTMLDivElement>(null);
  const productsTransition = useRef<HTMLDivElement>(null);
  const servicesTransition = useRef<HTMLDivElement>(null);

  useClickAway(containerRef, () => void setMobileOpen(false));

  useEffect(() => {
    if (mobileOpen) {
      setTransitionHeight(defaultTransition.current?.offsetHeight as number);
    } else {
      setTransitionHeight(0);
      setActive("default");
    }
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only left-10 top-28 bg-indigo-700 text-white focus:not-sr-only focus:absolute focus:px-6 focus:py-4"
      >
        Skip to Content
      </a>
      <nav className={styles.nav} ref={containerRef}>
        <Link href={Router.Home} className={cx(styles.navLink, styles.navHome)}>
          IMH
        </Link>

        <button
          className={styles.hamburger}
          onClick={toggle}
          onMouseDown={(e) => ripple.create(e, "light")}
          aria-controls="primary-navigation"
          aria-expanded={mobileOpen}
        >
          <Hamburger className="h-6 w-6" open={mobileOpen} />
        </button>
        <div
          className="relative w-full overflow-hidden md:contents"
          style={{ height: transitionHeight }}
          ref={transitionContainer}
        >
          <Transition
            show={!isMobile || active === "default"}
            ref={defaultTransition}
            className={cx(
              "ml-auto md:flex",
              { "absolute block w-full": mobileOpen },
              { hidden: !mobileOpen },
            )}
            beforeEnter={() => {
              setTransitionHeight(
                defaultTransition.current?.offsetHeight as number,
              );
            }}
            enter="transition-transform ease-in-out duration-500"
            enterFrom="transform -translate-x-full"
            enterTo="transform translate-x-0"
            leave="transition-transform ease-in-out duration-500"
            leaveFrom="transform translate-x-0"
            leaveTo="transform -translate-x-full"
          >
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
            <div className="hidden md:contents">
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

              {/* <div className="relative contents sm:block">
            <button
              className={cx("hidden sm:block", styles.navLink)}
              onClick={setOpen}
            >
              Products and Services
            </button>
            <div className={styles.dropdown}>
              <span className={styles.navLink}>Products</span>
              <Link href={Router["Dent"]} className={styles.navLink}>
                Dent Instruments
              </Link>
              <Link href={Router["Dranetz"]} className={styles.navLink}>
                Dranetz
              </Link>
              <Link href={Router["Electrotek"]} className={styles.navLink}>
                Electrotek Systems
              </Link>
              <Link href={Router["Powerside"]} className={styles.navLink}>
                Powerside
              </Link>
              <span className={styles.navLink}>Services</span>
              <Link href={Router["Consultancy"]} className={styles.navLink}>
                Consultancy from IMH
              </Link>
            </div>
          </div> */}
            </div>
            <div className="contents md:hidden">
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
            show={Boolean(isMobile) && active === "policies"}
            appear
            ref={policiesTransition}
            className={cx(
              "ml-auto md:flex",
              { "absolute block w-full": mobileOpen },
              { hidden: !mobileOpen },
            )}
            beforeEnter={() => {
              setTransitionHeight(
                policiesTransition.current?.offsetHeight as number,
              );
            }}
            enter="transition-transform ease-in-out duration-500"
            enterFrom="transform translate-x-full"
            enterTo="transform translate-x-0"
            leave="transition-transform ease-in-out duration-500"
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
            show={Boolean(isMobile) && active === "products"}
            appear
            ref={productsTransition}
            className={cx(
              "ml-auto md:flex",
              { "absolute block w-full": mobileOpen },
              { hidden: !mobileOpen },
            )}
            beforeEnter={() => {
              setTransitionHeight(
                productsTransition.current?.offsetHeight as number,
              );
            }}
            enter="transition-transform ease-in-out duration-500"
            enterFrom="transform translate-x-full"
            enterTo="transform translate-x-0"
            leave="transition-transform ease-in-out duration-500"
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
            show={Boolean(isMobile) && active === "services"}
            appear
            ref={servicesTransition}
            className={cx(
              "ml-auto md:flex",
              { "absolute block w-full": mobileOpen },
              { hidden: !mobileOpen },
            )}
            beforeEnter={() => {
              setTransitionHeight(
                servicesTransition.current?.offsetHeight as number,
              );
            }}
            enter="transition-transform ease-in-out duration-500"
            enterFrom="transform translate-x-full"
            enterTo="transform translate-x-0"
            leave="transition-transform ease-in-out duration-500"
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
      </nav>
    </>
  );
};

export default Navbar;
