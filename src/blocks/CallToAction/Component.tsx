import type { FunctionComponent } from "react";
import { CMSLink } from "~/components/Link";
import RichText from "~/components/RichText";
import type { CallToActionBlock as CTABlockProps } from "~/payload-types";

export const CallToActionBlock: FunctionComponent<CTABlockProps> = ({
  links,
  richText,
}) => {
  return (
    <div className="container">
      <div className="border-border bg-card flex flex-col gap-8 rounded-sm border p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-3xl items-center">
          {richText && (
            <RichText className="mb-0" data={richText} enableGutter={false} />
          )}
        </div>
        <div className="flex flex-col gap-8">
          {(links ?? []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...link} />;
          })}
        </div>
      </div>
    </div>
  );
};
