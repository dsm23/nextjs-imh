"use client";

import type { ComponentProps, FunctionComponent, Ref } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "~/utilities/ui";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger: FunctionComponent<
  { ref?: Ref<HTMLButtonElement> } & ComponentProps<
    typeof SelectPrimitive.Trigger
  >
> = ({ children, className, ref, ...props }) => (
  <SelectPrimitive.Trigger
    className={cn(
      "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-sm border px-3 py-2 text-inherit focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="size-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
);

const SelectScrollUpButton: FunctionComponent<
  { ref?: Ref<HTMLDivElement> } & ComponentProps<
    typeof SelectPrimitive.ScrollUpButton
  >
> = ({ className, ref, ...props }) => (
  <SelectPrimitive.ScrollUpButton
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className,
    )}
    ref={ref}
    {...props}
  >
    <ChevronUp className="size-4" />
  </SelectPrimitive.ScrollUpButton>
);

const SelectScrollDownButton: FunctionComponent<
  { ref?: Ref<HTMLDivElement> } & ComponentProps<
    typeof SelectPrimitive.ScrollDownButton
  >
> = ({ className, ref, ...props }) => (
  <SelectPrimitive.ScrollDownButton
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className,
    )}
    ref={ref}
    {...props}
  >
    <ChevronDown className="size-4" />
  </SelectPrimitive.ScrollDownButton>
);

const SelectContent: FunctionComponent<
  {
    ref?: Ref<HTMLDivElement>;
  } & ComponentProps<typeof SelectPrimitive.Content>
> = ({ children, className, position = "popper", ref, ...props }) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-card text-popover-foreground relative z-50 max-h-96 min-w-32 overflow-hidden rounded-sm border shadow-md",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      ref={ref}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width)",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
);

const SelectLabel: FunctionComponent<
  { ref?: Ref<HTMLDivElement> } & ComponentProps<typeof SelectPrimitive.Label>
> = ({ className, ref, ...props }) => (
  <SelectPrimitive.Label
    className={cn("py-1.5 pr-2 pl-8 text-sm font-semibold", className)}
    ref={ref}
    {...props}
  />
);

const SelectItem: FunctionComponent<
  { ref?: Ref<HTMLDivElement>; value: string } & ComponentProps<
    typeof SelectPrimitive.Item
  >
> = ({ children, className, ref, ...props }) => (
  <SelectPrimitive.Item
    className={cn(
      "focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex size-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="size-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
);

const SelectSeparator: FunctionComponent<
  { ref?: Ref<HTMLDivElement> } & ComponentProps<
    typeof SelectPrimitive.Separator
  >
> = ({ className, ref, ...props }) => (
  <SelectPrimitive.Separator
    className={cn("bg-muted -mx-1 my-1 h-px", className)}
    ref={ref}
    {...props}
  />
);

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
