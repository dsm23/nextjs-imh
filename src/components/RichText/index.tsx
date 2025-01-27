import {
  LinkJSXConverter,
  RichText as RichTextWithoutBlocks,
} from "@payloadcms/richtext-lexical/react";
import type {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
} from "@payloadcms/richtext-lexical";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import type { JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";
import { BannerBlock } from "~/blocks/Banner/Component";
import { CallToActionBlock } from "~/blocks/CallToAction/Component";
import { CodeBlock } from "~/blocks/Code/Component";
import { MediaBlock } from "~/blocks/MediaBlock/Component";
import { cn } from "~/utilities/ui";
import type { CodeBlockProps } from "~/blocks/Code/Component";
import type {
  BannerBlock as BannerBlockProps,
  CallToActionBlock as CTABlockProps,
  MediaBlock as MediaBlockProps,
} from "~/payload-types";

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<
      CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps
    >;

type Doc = {
  relationTo: string;
  value: {
    id: string;
    slug: string;
  };
};

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc as Doc;
  if (typeof value !== "object") {
    throw new Error("Expected value to be an object");
  }
  const slug = value.slug;
  return relationTo === "posts" ? `/posts/${slug}` : `/${slug}`;
};

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => {
  return {
    ...defaultConverters,
    ...LinkJSXConverter({ internalDocToHref }),
    blocks: {
      banner: ({ node }) => (
        <BannerBlock className="col-start-2 mb-4" {...node.fields} />
      ),
      mediaBlock: ({ node }) => (
        <MediaBlock
          className="col-span-3 col-start-1"
          imgClassName="mx-auto max-w-full text-center shadow-lg lg:max-w-screen-md"
          {...node.fields}
          captionClassName="mx-auto max-w-[48rem]"
          enableGutter={false}
          disableInnerContainer={true}
        />
      ),
      code: ({ node }) => (
        <CodeBlock className="col-start-2" {...node.fields} />
      ),
      cta: ({ node }) => <CallToActionBlock {...node.fields} />,
    },
  };
};

type Props = {
  data: SerializedEditorState;
  converters?: JSXConvertersFunction<NodeTypes>;
  enableGutter?: boolean;
  enableProse?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function RichText(props: Props) {
  const {
    className,
    converters,
    enableProse = true,
    enableGutter = true,
    ...rest
  } = props;
  return (
    <RichTextWithoutBlocks
      converters={converters ?? jsxConverters}
      className={cn(
        {
          container: enableGutter,
          "max-w-none": !enableGutter,
          "prose md:prose-md dark:prose-invert mx-auto": enableProse,
        },
        className,
      )}
      {...rest}
    />
  );
}
