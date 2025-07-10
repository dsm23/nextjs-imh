import type { FunctionComponent, HTMLAttributes, Ref } from "react";
import { cn } from "~/utilities/ui";

const Card: FunctionComponent<
  { ref?: Ref<HTMLDivElement> } & HTMLAttributes<HTMLDivElement>
> = ({ className, ref, ...props }) => (
  <div
    className={cn(
      "bg-card text-card-foreground rounded-lg border shadow-xs",
      className,
    )}
    ref={ref}
    {...props}
  />
);

const CardHeader: FunctionComponent<
  { ref?: Ref<HTMLDivElement> } & HTMLAttributes<HTMLDivElement>
> = ({ className, ref, ...props }) => (
  <div
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    ref={ref}
    {...props}
  />
);

const CardTitle: FunctionComponent<
  {
    ref?: Ref<HTMLHeadingElement>;
  } & HTMLAttributes<HTMLHeadingElement>
> = ({ className, ref, ...props }) => (
  <h3
    className={cn(
      "text-2xl leading-none font-semibold tracking-tight",
      className,
    )}
    ref={ref}
    {...props}
  />
);

const CardDescription: FunctionComponent<
  {
    ref?: Ref<HTMLParagraphElement>;
  } & HTMLAttributes<HTMLParagraphElement>
> = ({ className, ref, ...props }) => (
  <p
    className={cn("text-muted-foreground text-sm", className)}
    ref={ref}
    {...props}
  />
);

const CardContent: FunctionComponent<
  { ref?: Ref<HTMLDivElement> } & HTMLAttributes<HTMLDivElement>
> = ({ className, ref, ...props }) => (
  <div className={cn("p-6 pt-0", className)} ref={ref} {...props} />
);

const CardFooter: FunctionComponent<
  { ref?: Ref<HTMLDivElement> } & HTMLAttributes<HTMLDivElement>
> = ({ className, ref, ...props }) => (
  <div
    className={cn("flex items-center p-6 pt-0", className)}
    ref={ref}
    {...props}
  />
);

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
