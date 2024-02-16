import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Container from "../components/container";
import Layout from "../components/layout";
import PostTitle from "../components/post-title";
import Map from "../components/map";

export default function Page({ mapboxToken, preview }) {
  const router = useRouter();

  // if (!router.isFallback && !page) {
  //   return <ErrorPage statusCode={404} />;
  // }

  return (
    <Layout preview={preview}>
      <Container>
        {/* <Header /> */}
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <article>
            <Head>
              <title>IMH | Contact</title>
              <meta property="og:title" content="IMH | Contact" key="title" />
            </Head>
            <h1 className="my-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
              Contact Us
            </h1>
            <div className="gap-x-2 lg:flex">
              <address className="whitespace-nowrap">
                IMH Technologies Ltd
                <br />
                8 Roach View
                <br />
                Purdeys Industrial Estate
                <br />
                Rochford
                <br />
                Essex
                <br />
                SS4 1LB
                <br />
                Email: <a href="mailto:sales@imh.co.uk">sales@imh.co.uk</a>
                <br />
                Telephone: <a href="tel:+441702545429">01702 545429</a>
              </address>
              <Map token={mapboxToken} />
            </div>
          </article>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  return {
    props: {
      preview,
      mapboxToken: process.env.MAPBOX_API_TOKEN,
    },
  };
}
