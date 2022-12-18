import React, { FunctionComponent } from "react";
import Img, { ImageProps } from "next/image";
// import { useStaticQuery, graphql } from 'gatsby';
// import Img, { GatsbyImageProps, FluidObject } from 'gatsby-image';

// import { Query, ContentfulAsset } from '../../../graphql-types';

interface Props extends ImageProps {
  assetId: string;
  description: string;
}

const Image: FunctionComponent<Props> = ({
  assetId,
  description,
  ...props
}) => {
  return <Img {...props} alt={description as string} />;
};

export default Image;
