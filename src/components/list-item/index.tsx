import type { FunctionComponent, HTMLAttributes } from "react";
import { cn } from "~/utilities/ui";

const Li: FunctionComponent<HTMLAttributes<HTMLLIElement>> = ({
  className,
  ...props
}) => <li {...props} className={cn("mt-2 ml-8", className)} />;

export default Li;
