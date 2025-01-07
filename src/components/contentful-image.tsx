"use client";

import type { FunctionComponent } from "react";
import Image from "next/image";
import type { ImageLoader, ImageProps } from "next/image";

interface ContentfulImageProps extends ImageProps {
  alt: string;
}

const contentfulLoader: ImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage: FunctionComponent<ContentfulImageProps> = (props) => (
  <Image loader={contentfulLoader} {...props} alt={props.alt} />
);

export default ContentfulImage;
