import type { FunctionComponent, HTMLAttributes } from "react";
import { cn } from "~/utilities/ui";

const Paragraph: FunctionComponent<HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => <p {...props} className={cn("mt-2 text-gray-900", className)} />;

export default Paragraph;
