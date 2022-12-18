import Head from "next/head";

export default () => (
  <>
    <Head>
      <title>IMH | No internet connection</title>
      <meta
        property="og:title"
        content="IMH | No internet connection"
        key="title"
      />
    </Head>
    <h1>This is offline fallback page</h1>
    <div>When offline, any page route will fallback to this page</div>
  </>
);
