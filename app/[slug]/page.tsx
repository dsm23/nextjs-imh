import type { FunctionComponent } from "react";
import type { Metadata } from "next";
import Container from "@/components/container";
import PostBody from "@/components/post-body";
import { getPageAndMorePages } from "@/lib/api";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getPageAndMorePages(params.slug);

  return {
    title: `IMH | ${data?.page?.header ?? ""}`,
    openGraph: {
      title: `IMH | ${data?.page?.header ?? ""}`,
    },
  };
}

const Page: FunctionComponent<Props> = async ({ params }) => {
  const data = await getPageAndMorePages(params.slug);

  return (
    <Container>
      <article>
        <h1 className="my-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
          {data?.page?.header ?? ""}
        </h1>
        {data?.page?.content && <PostBody content={data.page.content} />}
      </article>
    </Container>
  );
};

export default Page;
