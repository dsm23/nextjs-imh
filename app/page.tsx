import type { Metadata } from "next";
import { headers } from "next/headers";
import type { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Container from "@/components/container";
import PostBody from "@/components/post-body";
import Divisor from "@/components/divisor";
import { getAsset, getWelcomeForHome } from "@/lib/api";
import ContentfulImage from "@/components/contentful-image";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";

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
  const data = (await getWelcomeForHome()) ?? {};
  const img = await getAsset("7sKYayeWgbxL0d549lviAc");

  const nonce = headers().get("csp-nonce");

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
    <Container>
      <article id="main-content" className="mb-16">
        <h1 className="sr-only">IMH technologies</h1>
        <div className="mt-6 grid grid-cols-2 items-center gap-x-5">
          <div>
            <PostBody content={data?.welcome?.body} />
          </div>

          <ContentfulImage
            src={data?.welcome?.welcomePic?.url as string}
            className="elevation rounded"
            height={data?.welcome?.welcomePic?.height as number}
            width={data?.welcome?.welcomePic?.width as number}
            alt={data?.welcome?.welcomePic?.description as string}
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

        {/* <pre>{JSON.stringify(welcome, null, 2)}</pre> */}

        <Divisor />

        <section id="cards">
          <h2 className="sr-only">Cards</h2>
          <h3 className="sr-only">Cards group</h3>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            {data?.cards?.map((card) => (
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
      {/* HACK: Content-Security-Policy */}
      <div className="hidden">{nonce}</div>
    </Container>
  );
};

export default Home;
