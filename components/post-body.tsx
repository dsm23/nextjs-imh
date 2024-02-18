// TODO: sort out embedded asset
// @ts-nocheck

import { FunctionComponent } from "react";
import Link from "next/link";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import {
  Block,
  BLOCKS,
  Inline,
  INLINES,
  MARKS,
} from "@contentful/rich-text-types";
import { Page } from "@/graphql-types";
import Anchor from "./anchor";
import ContentfulImage from "./contentful-image";

interface Props extends Pick<Page, "content"> {
  options?: Options;
}

const defaultOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <span className="font-bold text-gray-900">{text}</span>
    ),
  },
  renderNode: {
    [BLOCKS.HEADING_2]: (_, children) => (
      <h2 className="mt-4 text-2xl font-medium text-gray-900">{children}</h2>
    ),
    [BLOCKS.HEADING_4]: (_, children) => (
      <h4 className="mt-2 text-gray-900">{children}</h4>
    ),

    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="mt-2 text-gray-900">{children}</p>
    ),
    [BLOCKS.UL_LIST]: (_, children) => (
      <ul className="my-2 list-outside list-disc">{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (_, children) => <li className="ml-8">{children}</li>,
    [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => (
      <ContentfulImage
        className="mx-auto max-w-full text-center shadow-lg lg:max-w-screen-md"
        src={node?.data?.url}
        height={node?.data?.height}
        width={node?.data?.width}
        alt={node?.data?.description}
      />
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <Anchor href={node.data.uri} as={Link}>
        {children}
      </Anchor>
    ),
  },
  // renderText: text => text.replace('!', '?'),
};

const PostBody: FunctionComponent<Props> = ({
  content,
  options = defaultOptions,
}) => {
  const { json, links } = content;

  json.content = content?.json?.content?.map(({ nodeType, data, ...rest }) => {
    if (nodeType !== BLOCKS.EMBEDDED_ASSET) {
      return {
        nodeType,
        data,
        ...rest,
      };
    }

    return {
      nodeType,
      ...rest,
      data: {
        ...data,
        ...links?.assets?.block?.find(
          (block) => block?.sys?.id === data?.target?.sys?.id,
        ),
      },
    };
  });

  return <>{documentToReactComponents(json, options)}</>;
};

export default PostBody;
