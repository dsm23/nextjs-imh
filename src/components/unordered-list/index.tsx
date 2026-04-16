import type { FunctionComponent, HTMLAttributes } from "react";
import cn from "~/lib/class-names";

const Ul: FunctionComponent<HTMLAttributes<HTMLUListElement>> = ({
  className,
  ...props
}) => (
  <ul {...props} className={cn("my-2 list-outside list-disc", className)} />
);

export default Ul;
