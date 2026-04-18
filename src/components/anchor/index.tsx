import type { FunctionComponent } from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import cn from "~/lib/class-names";

const Anchor: FunctionComponent<useRender.ComponentProps<"a">> = ({
  className,
  render,
  ...props
}) =>
  useRender({
    defaultTagName: "a",
    props: mergeProps<"a">(
      {
        className: cn(
          "-mx-1 rounded-sm px-1 font-semibold text-purple-800 underline underline-offset-2 hover:bg-yellow-300",
          className,
        ),
      },
      props,
    ),
    render,
    state: {
      slot: "a",
    },
  });

export default Anchor;
