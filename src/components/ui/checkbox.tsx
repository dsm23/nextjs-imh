"use client";

import type { ComponentProps, FunctionComponent, Ref } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "~/utilities/ui";

const Checkbox: FunctionComponent<
  {
    ref?: Ref<HTMLButtonElement>;
  } & ComponentProps<typeof CheckboxPrimitive.Root>
> = ({ className, ref, ...props }) => (
  <CheckboxPrimitive.Root
    className={cn(
      "peer border-primary ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground h-4 w-4 shrink-0 rounded-sm border focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="size-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
);

export { Checkbox };
