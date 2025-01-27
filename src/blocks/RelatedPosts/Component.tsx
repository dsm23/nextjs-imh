import type { FunctionComponent } from "react";
import clsx from "clsx";
import RichText from "~/components/RichText";
import type { Post } from "~/payload-types";
import { Card } from "../../components/Card";

export type RelatedPostsProps = {
  className?: string;
  docs?: Post[];
  introContent?: any;
};

export const RelatedPosts: FunctionComponent<RelatedPostsProps> = (props) => {
  const { className, docs, introContent } = props;

  return (
    <div className={clsx("lg:container", className)}>
      {introContent && <RichText data={introContent} enableGutter={false} />}

      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-8">
        {docs?.map((doc, index) => {
          if (typeof doc === "string") return null;

          return (
            <Card key={index} doc={doc} relationTo="posts" showCategories />
          );
        })}
      </div>
    </div>
  );
};
