import { cache } from "react";
import type { FunctionComponent } from "react";
import { draftMode } from "next/headers";
import type { Metadata } from "next";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import { RenderBlocks } from "~/blocks/RenderBlocks";
import { LivePreviewListener } from "~/components/LivePreviewListener";
import { PayloadRedirects } from "~/components/PayloadRedirects";
// import { homeStatic } from "~/endpoints/seed/home-static";
import { RenderHero } from "~/heros/RenderHero";
import { generateMeta } from "~/utilities/generateMeta";
import type { Page as PageType } from "~/payload-types";
import PageClient from "./page.client";

import "./styles.css";

// export async function generateStaticParams() {
//   const payload = await getPayload({ config: configPromise });
//   const pages = await payload.find({
//     collection: "pages",
//     draft: false,
//     limit: 1000,
//     overrideAccess: false,
//     pagination: false,
//     select: {
//       slug: true,
//     },
//   });

//   const params = pages.docs
//     .filter((doc) => {
//       return doc.slug !== "home";
//     })
//     .map(({ slug }) => {
//       return { slug };
//     });

//   return params;
// }

type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

const Page: FunctionComponent<Args> = async ({
  params: paramsPromise,
}: Args) => {
  const { isEnabled: draft } = await draftMode();
  const { slug = "home" } = await paramsPromise;
  const url = "/" + slug;

  const page: PageType | null = await queryPageBySlug({
    slug,
  });

  // Remove this code once your website is seeded
  // if (!page && slug === "home") {
  //   page = homeStatic;
  // }

  if (!page) {
    return <PayloadRedirects url={url} />;
  }

  const { hero, layout } = page;

  return (
    <article className="rich-text">
      <PageClient />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  );
};

export async function generateMetadata({
  params: paramsPromise,
}): Promise<Metadata> {
  const { slug = "home" } = await paramsPromise;
  const page = await queryPageBySlug({
    slug,
  });

  return generateMeta({ doc: page });
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: "pages",
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs[0] || null;
});

export default Page;
