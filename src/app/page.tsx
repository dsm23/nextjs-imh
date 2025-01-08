import type { Metadata } from "next";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import type { Options } from "@contentful/rich-text-react-renderer";
import Container from "~/components/container";
import ContentfulImage from "~/components/contentful-image";
import Divisor from "~/components/divisor";
import PostBody from "~/components/post-body";
import { getAsset, getWelcomeForHome } from "~/lib/api";
import { HOME_OG_IMAGE_URL } from "~/lib/constants";

export const metadata: Metadata = {
  title: "IMH",
  description: "A UK destributor to electrical equipment",
  openGraph: {
    title: "IMH",
    description: "A UK destributor to electrical equipment",
    images: HOME_OG_IMAGE_URL,
  },
};

const Home = async () => {
  const data = await getWelcomeForHome();
  const img = await getAsset("7sKYayeWgbxL0d549lviAc");

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
            src={node.data.url as string}
            className="block"
            height={node.data.height as number}
            width={node.data.width as number}
            alt={node.data.description as string}
          />
        );
      },
    },
    // renderText: text => text.replace('!', '?'),
  };

  return (
    <Container>
      <article id="main-content" className="mb-16">
        <h1 className="sr-only">IMH technologies</h1>
        <div className="mt-6 grid items-center gap-x-5 gap-y-4 md:grid-cols-2 lg:grid-cols-[3fr_2fr]">
          <div>
            <PostBody content={data.welcome?.body} />
          </div>

          <ContentfulImage
            src={data.welcome?.welcomePic?.url as string}
            className="elevation rounded"
            height={data.welcome?.welcomePic?.height as number}
            width={data.welcome?.welcomePic?.width as number}
            alt={data.welcome?.welcomePic?.description as string}
            placeholder="data:image/webp;base64,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"
          />
        </div>

        <Divisor />

        <section id="powerside" className="mt-6">
          <h2 className="text-4xl">Partnered with Powerside</h2>
          <div className="md:flex md:items-center">
            <ContentfulImage
              src={img?.url as string}
              className="block w-full md:w-1/2"
              height={img?.height as number}
              width={img?.width as number}
              alt={img?.description as string}
            />
            <div className="w-full md:w-1/2">
              <h2 className="mt-4 text-3xl">PQUBE 3</h2>
              <h3 className="mt-4 text-xl">
                The World{"'"}s best power quality recorder
              </h3>
              <p className="mt-3">
                Real-time analysis of voltage and current connections with
                daily, weekly and monthly trends
              </p>
              <p className="mt-3">
                remote monitoring via smartphone, tablet and desktop - on the
                web without additional software
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

        <Divisor />

        <section id="cards">
          <h2 className="sr-only">Cards</h2>
          <h3 className="sr-only">Cards group</h3>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            {data.cards?.map((card) => (
              <div className="elevation rounded p-3" key={card?.entryUnused}>
                <PostBody content={card?.body} options={options} />
              </div>
            ))}
          </div>
        </section>

        <Divisor />

        <h2 className="text-2xl">Great products deserve great backup</h2>

        <p className="text-gray-900">
          We offer advice, hardware and software configuration, measurement data
          evaluation, training and post-sales support that is second to none.
        </p>
      </article>
    </Container>
  );
};

export default Home;
