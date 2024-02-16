import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Container from "../components/container";
import Layout from "../components/layout";
import { getPageAndMorePages } from "../lib/api";
import PostTitle from "../components/post-title";

export default function Page() {
  const router = useRouter();

  if (!router.isFallback) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={false}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Head>
              <title>IMH | author</title>
              <meta property="og:title" content="IMH | author" key="title" />
            </Head>
            <article itemScope itemType="http://schema.org/Author">
              <h1
                itemProp="name"
                id="David Murdoch"
                className="my-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter"
              >
                David Murdoch
              </h1>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}
