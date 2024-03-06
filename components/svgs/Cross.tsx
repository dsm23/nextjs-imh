import type { FunctionComponent, HTMLAttributes } from "react";
import cn from "@/lib/class-names";

type Props = HTMLAttributes<SVGSVGElement>;

const Cross: FunctionComponent<Props> = ({ className, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={cn("h-6 w-6", className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

export default Cross;
