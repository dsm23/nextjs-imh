import type { FunctionComponent } from "react";
import Img from "next/image";
import type { ImageProps } from "next/image";

// import { useStaticQuery, graphql } from 'gatsby';
// import Img, { GatsbyImageProps, FluidObject } from 'gatsby-image';

// import { Query, ContentfulAsset } from '../../../graphql-types';

interface Props extends ImageProps {
  assetId: string;
  description: string;
}

const Image: FunctionComponent<Props> = ({ description, ...props }) => {
  return <Img {...props} alt={description} />;
};

export default Image;
