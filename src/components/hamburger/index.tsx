import type { FunctionComponent, HTMLAttributes } from "react";
import cn from "~/lib/class-names";

interface Props extends HTMLAttributes<SVGSVGElement> {
  open: boolean;
}

const Hamburger: FunctionComponent<Props> = ({ open, className, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={cn("text-white", className)}
    viewBox="0 0 100 100"
  >
    <rect
      width="80"
      height="10"
      x="10"
      rx="5"
      className={cn(
        "origin-center duration-250 ease-in motion-reduce:transition-none",
        open
          ? "transition-[y,rotate,opacity] delay-[0ms,250ms,250ms]"
          : "transition-[y,rotate,opacity] delay-[250ms,0ms,250ms]",
        open ? "rotate-45 [y:45px]" : "rotate-0 [y:20px]",
      )}
    />
    <rect
      width="80"
      height="10"
      x="10"
      y="45"
      rx="5"
      className={cn(
        "origin-center duration-250 ease-in motion-reduce:transition-none",
        open
          ? "transition-[y,rotate,opacity] delay-[0ms,250ms,250ms]"
          : "transition-[y,rotate,opacity] delay-[250ms,0ms,250ms]",
        open ? "opacity-0" : "opacity-100",
      )}
    />
    <rect
      width="80"
      height="10"
      x="10"
      rx="5"
      className={cn(
        "origin-center duration-250 ease-in motion-reduce:transition-none",
        open
          ? "transition-[y,rotate,opacity] delay-[0ms,250ms,250ms]"
          : "transition-[y,rotate,opacity] delay-[250ms,0ms,250ms]",
        open ? "-rotate-45 [y:45px]" : "rotate-0 [y:70px]",
      )}
    />
  </svg>
);

export default Hamburger;
