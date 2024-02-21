"use client";

import type { FunctionComponent } from "react";
import { getImageProps } from "next/image";
import type { ImageLoader, ImageProps } from "next/image";

interface ContentfulImageProps extends ImageProps {
  alt: string;
}

const contentfulLoader: ImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage: FunctionComponent<ContentfulImageProps> = (props) => {
  const { props: imageProps } = getImageProps({
    loader: contentfulLoader,
    ...props,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { style, ...delegated } = imageProps;

  // eslint-disable-next-line @next/next/no-img-element
  return <img {...delegated} alt={props.alt} />;
};

export default ContentfulImage;
