import type { FunctionComponent, ReactNode } from "react";
import cn from "~/lib/class-names";

type Props = {
  className?: string;
  children: ReactNode;
};

const Container: FunctionComponent<Props> = ({ children, className }) => (
  <div className={cn("mx-auto max-w-7xl px-5", className)}>{children}</div>
);

export default Container;
