import type { FunctionComponent } from "react";
import { Card } from "~/components/Card";
import { cn } from "~/utilities/ui";
import type { CardPostData } from "~/components/Card";

export type Props = {
  posts: CardPostData[];
};

export const CollectionArchive: FunctionComponent<Props> = (props) => {
  const { posts } = props;

  return (
    <div className={cn("container")}>
      <div>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-12 lg:gap-8 xl:gap-x-8">
          {posts.map((result, index) => {
            if (typeof result === "object") {
              return (
                <div className="col-span-4" key={index}>
                  <Card
                    className="h-full"
                    doc={result}
                    relationTo="posts"
                    showCategories
                  />
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
};
