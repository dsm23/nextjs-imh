import type { FunctionComponent, HTMLAttributes } from "react";

type Props = HTMLAttributes<SVGSVGElement>;

const ChevronRight: FunctionComponent<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

export default ChevronRight;
