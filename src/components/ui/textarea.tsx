import type { FunctionComponent, Ref, TextareaHTMLAttributes } from "react";
import { cn } from "~/utilities/ui";

const Textarea: FunctionComponent<
  {
    ref?: Ref<HTMLTextAreaElement>;
  } & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ className, ref, ...props }) => {
  return (
    <textarea
      className={cn(
        "border-border bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full rounded-sm border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export { Textarea };
