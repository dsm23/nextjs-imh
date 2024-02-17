// TODO: move to app router
// @ts-nocheck
import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Container from "../components/container";
import PostBody from "../components/post-body";
import Layout from "../components/layout";
import { getAllPagesWithSlug, getPageAndMorePages } from "@/lib/api";
import PostTitle from "../components/post-title";

export default function Page({ page, morePages, preview }) {
  const router = useRouter();

  if (!router.isFallback && !page) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        {/* <Header /> */}
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <article>
            <Head>
              <title>IMH | {page.header}</title>
              <meta
                property="og:title"
                content={`IMH | ${page.header}`}
                key="title"
              />
            </Head>
            <h1 className="my-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
              {page.header}
            </h1>
            <PostBody content={page.content} />
            {/* <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts && morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )} */}
          </article>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPageAndMorePages(params.slug, preview);

  return {
    props: {
      preview,
      page: data?.page ?? null,
      morePages: data?.morePages ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPages = await getAllPagesWithSlug();
  return {
    paths: allPages?.map(({ slug }) => `/${slug}`) ?? [],
    fallback: true,
  };
}
