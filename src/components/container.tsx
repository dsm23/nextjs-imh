import type { FunctionComponent, ReactNode } from "react";
import { cn } from "~/utilities/ui";

type Props = {
  className?: string;
  children: ReactNode;
};

const Container: FunctionComponent<Props> = ({ children, className }) => (
  <div className={cn("container mx-auto px-5", className)}>{children}</div>
);

export default Container;
