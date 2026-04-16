import type { FunctionComponent, HTMLAttributes } from "react";
import cn from "~/lib/class-names";

const Ol: FunctionComponent<HTMLAttributes<HTMLOListElement>> = ({
  className,
  ...props
}) => (
  <ol {...props} className={cn("my-2 list-outside list-decimal", className)} />
);

export default Ol;
