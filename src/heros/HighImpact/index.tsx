"use client";

import { useEffect } from "react";
import { CMSLink } from "~/components/Link";
import { Media } from "~/components/Media";
import RichText from "~/components/RichText";
import { useHeaderTheme } from "~/providers/HeaderTheme";
import type { Page } from "~/payload-types";

export const HighImpactHero: React.FC<Page["hero"]> = ({
  links,
  media,
  richText,
}) => {
  const { setHeaderTheme } = useHeaderTheme();

  useEffect(() => {
    setHeaderTheme("dark");
  });

  return (
    <div
      className="relative -mt-40 flex items-center justify-center"
      data-theme="dark"
    >
      <div className="relative z-10 container mb-8 flex items-center justify-center">
        {richText && (
          <RichText className="mb-6" data={richText} enableGutter={false} />
        )}
        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex gap-4 md:justify-center">
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="min-h-[80vh] select-none">
        {media && typeof media === "object" && (
          <Media
            fill
            imgClassName="-z-10 object-cover"
            priority
            resource={media}
          />
        )}
      </div>
    </div>
  );
};
