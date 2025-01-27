import type {
  ComponentProps,
  FunctionComponent,
  HTMLAttributes,
  Ref,
} from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/utilities/ui";
import type { ButtonProps } from "~/components/ui/button";

const Pagination = ({ className, ...props }: ComponentProps<"nav">) => (
  <nav
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    role="navigation"
    {...props}
  />
);

const PaginationContent: FunctionComponent<
  { ref?: Ref<HTMLUListElement> } & HTMLAttributes<HTMLUListElement>
> = ({ className, ref, ...props }) => (
  <ul
    className={cn("flex flex-row items-center gap-1", className)}
    ref={ref}
    {...props}
  />
);

const PaginationItem: FunctionComponent<
  { ref?: Ref<HTMLLIElement> } & HTMLAttributes<HTMLLIElement>
> = ({ className, ref, ...props }) => (
  <li className={cn("", className)} ref={ref} {...props} />
);

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  ComponentProps<"button">;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <button
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        size,
        variant: isActive ? "outline" : "ghost",
      }),
      className,
    )}
    {...props}
  />
);

const PaginationPrevious = ({
  className,
  ...props
}: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn("gap-1 pl-2.5", className)}
    size="default"
    {...props}
  >
    <ChevronLeft className="size-4" />
    <span>Previous</span>
  </PaginationLink>
);

const PaginationNext = ({
  className,
  ...props
}: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn("gap-1 pr-2.5", className)}
    size="default"
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="size-4" />
  </PaginationLink>
);

const PaginationEllipsis = ({
  className,
  ...props
}: ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex size-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="size-4" />
    <span className="sr-only">More pages</span>
  </span>
);

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
