"use client";

import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import cn from "~/lib/class-names";

const Label = forwardRef<
  ElementRef<typeof LabelPrimitive.Root>,
  ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className,
    )}
    {...props}
  />
));

Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
