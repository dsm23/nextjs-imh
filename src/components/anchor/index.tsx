import { forwardRef } from "react";
import type { AnchorHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import cn from "~/lib/class-names";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  asChild?: boolean;
};

const Anchor = forwardRef<HTMLAnchorElement, Props>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        className={cn(
          "-mx-1 rounded-sm px-1 font-semibold text-purple-800 underline underline-offset-2 hover:bg-yellow-300",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Anchor.displayName = "Anchor";

export default Anchor;
