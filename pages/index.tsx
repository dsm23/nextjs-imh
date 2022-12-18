import Head from "next/head";
import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Container from "../components/container";
import PostBody from "../components/post-body";
import Divisor from "../components/divisor";

import Layout from "../components/layout";
import { getAsset, getWelcomeForHome } from "../lib/api";
import ContentfulImage from "../components/contentful-image";

const Home = ({ preview, welcome, cards, img }) => {
  // const homePage = allPages[0]
  // const morePages = allPages.slice(1)

  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => (
        <span className="text-2xl font-bold text-blue-700">{text}</span>
      ),
    },
    renderNode: {
      [BLOCKS.LIST_ITEM]: (_, children) => {
        return <li className="list-group-item">{children}</li>;
      },
      [BLOCKS.PARAGRAPH]: (_, children) => {
        return <p className="mt-4">{children}</p>;
      },
      [BLOCKS.HEADING_4]: (_, children) => {
        return <h4 className="text-2xl font-bold">{children}</h4>;
      },
      [BLOCKS.UL_LIST]: (_, children) => {
        return <ul className="ml-5 list-disc">{children}</ul>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        // console.log(node, "test");
        return (
          <ContentfulImage
            src={node?.data?.url}
            className="block"
            height={node?.data?.height}
            width={node?.data?.width}
            alt={node?.data?.description}
          />
        );
      },
    },
    // renderText: text => text.replace('!', '?'),
  };

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>IMH</title>
        </Head>
        <Container>
          {/* {heroPage && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}
          <article id="main-content" className="mb-16">
            <h1 className="sr-only">IMH technologies</h1>
            <div className="grid grid-cols-2 items-center gap-x-5 mt-6">
              <div>
                <PostBody content={welcome.body} />
              </div>

              <ContentfulImage
                src={welcome.welcomePic.url}
                className="rounded elevation"
                height={welcome.welcomePic.height}
                width={welcome.welcomePic.width}
                alt={welcome.welcomePic.description}
              />
            </div>

            <Divisor />

            <section id="powerside" className="mt-6">
              <h2 className="text-4xl">Partnered with Powerside</h2>
              <div className="md:flex md:items-center">
                <ContentfulImage
                  src={img?.url}
                  className="block w-full md:w-1/2"
                  height={img?.height}
                  width={img?.width}
                  alt={img?.description}
                />
                <div className="w-full md:w-1/2">
                  <h2 className="mt-4 text-3xl">PQUBE 3</h2>
                  <h3 className="mt-4 text-xl">
                    The World's best power quality recorder
                  </h3>
                  <p className="mt-3">
                    Real-time analysis of voltage and current connections with
                    daily, weekly and monthly trends
                  </p>
                  <p className="mt-3">
                    remote monitoring via smartphone, tablet and desktop - on
                    the web without additional software
                  </p>
                  <p className="mt-3">
                    Detailed reports with self-selectable content, eg EN 50160
                  </p>
                  <p className="mt-3">
                    Intuitive installation and operation of power analyzers
                  </p>
                </div>
              </div>
            </section>

            {/* <pre>{JSON.stringify(welcome, null, 2)}</pre> */}

            <Divisor />

            <section id="cards">
              <h2 className="sr-only">Cards</h2>
              <h3 className="sr-only">Cards group</h3>
              <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {cards.map((card) => (
                  <div className="elevation rounded p-3" key={card.entryUnused}>
                    <PostBody content={card.body} options={options} />
                  </div>
                ))}
              </div>
            </section>

            <Divisor />

            <h2 className="text-2xl">Great products deserve great backup</h2>

            <p className="text-gray-900">
              We offer advice, hardware and software configuration, measurement
              data evaluation, training and post-sales support that is second to
              none.
            </p>
          </article>
        </Container>
      </Layout>
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const data = (await getWelcomeForHome(preview)) ?? {};
  const img = await getAsset("7sKYayeWgbxL0d549lviAc");

  return {
    props: {
      preview,
      // @ts-ignore
      welcome: data?.welcome ?? {},
      // @ts-ignore
      cards: data?.cards ?? [],
      img: img ?? {},
    },
  };
}

export default Home;
