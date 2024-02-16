import {
  ComponentProps,
  ElementType,
  forwardRef,
  ReactElement,
  Ref,
} from "react";
import clsx from "clsx";

export type PlymorphicProps<E extends ElementType = ElementType> = {
  as?: E;
  className?: string;
};

export type Props<E extends ElementType> = PlymorphicProps<E> &
  Omit<ComponentProps<E>, keyof PlymorphicProps>;

const defaultElement = "a";

const Anchor: <E extends ElementType = typeof defaultElement>(
  props: Props<E>,
) => ReactElement | null = forwardRef(
  (
    { as: Component = defaultElement, className, ...props }: PlymorphicProps,
    ref: Ref<Element>,
  ) => (
    <Component
      className={clsx(
        "-mx-1 rounded px-1 font-semibold text-purple-800 hover:bg-yellow-300",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);

export default Anchor;
