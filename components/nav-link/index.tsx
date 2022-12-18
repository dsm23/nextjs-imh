import React, {
  ComponentProps,
  ElementType,
  forwardRef,
  ReactElement,
  Ref,
} from "react";
import cx from "clsx";
import Link from "next/link";

import styles from "./styles.module.css";

export type PlymorphicProps<E extends ElementType = ElementType> = {
  as?: E;
  className?: string;
};

export type Props<E extends ElementType> = PlymorphicProps<E> &
  Omit<ComponentProps<E>, keyof PlymorphicProps>;

const defaultElement = Link;

const NavLink: <E extends ElementType = typeof defaultElement>(
  props: Props<E>
) => ReactElement | null = forwardRef(
  (
    { as: Component = defaultElement, className, ...props }: PlymorphicProps,
    ref: Ref<Element>
  ) => (
    <Component className={cx(styles.navLink, className)} ref={ref} {...props} />
  )
);

export default NavLink;
