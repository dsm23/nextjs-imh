import { forwardRef } from "react";
import type { ComponentProps, ElementType, ReactElement, Ref } from "react";
import Link from "next/link";
import cn from "@/lib/class-names";

import styles from "./styles.module.css";

export type PlymorphicProps<E extends ElementType = ElementType> = {
  as?: E;
  className?: string;
};

export type Props<E extends ElementType> = PlymorphicProps<E> &
  Omit<ComponentProps<E>, keyof PlymorphicProps>;

const defaultElement = Link;

const NavLink = forwardRef(
  (
    { as: Component = defaultElement, className, ...props }: PlymorphicProps,
    ref: Ref<Element>,
  ) => (
    <Component className={cn(styles.navLink, className)} ref={ref} {...props} />
  ),
) as { displayName: string } & (<E extends ElementType = typeof defaultElement>(
  props: Props<E>,
) => ReactElement);

NavLink.displayName = "NavLink";

export default NavLink;
