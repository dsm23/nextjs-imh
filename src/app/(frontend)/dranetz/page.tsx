import type { FunctionComponent } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import refImage from "~/assets/Dranetz_HDPQ_G5-5_Voltage_Harmonics_Page_1.jpg";
import Anchor from "~/components/anchor";
import Container from "~/components/container";
import Li from "~/components/list-item";
import Paragraph from "~/components/paragraph";
import Ul from "~/components/unordered-list";

export function generateMetadata(): Metadata {
  return {
    title: `IMH | Dranetz`,
    description: "Some information about Dranetz",
    openGraph: {
      title: `IMH | Dranetz`,
      description: "Some information about Dranetz",
    },
  };
}

const Page: FunctionComponent = () => (
  <Container>
    <article>
      <h1 className="my-8 text-2xl leading-tight font-bold tracking-tight md:text-4xl md:tracking-tighter">
        Dranetz
      </h1>
      <Paragraph>
        To go straight to the{" "}
        <Anchor asChild>
          <a href="https://www.dranetz.com/">Dranetz website</a>
        </Anchor>
        .
      </Paragraph>

      <Paragraph>
        The Power Quality Instrumentation manufactured by Dranetz divides into
        two main ranges:
      </Paragraph>

      <Ul>
        <Li>Handheld Portables</Li>
        <Li>Low Cost Energy Loggers - the new DranXpert.</Li>
      </Ul>

      <Paragraph>
        Dranetz has class leading developments addressing each of these market
        segments.The HDPQ can be seen in detail by visiting their website.
        Nowadays there is considerable crossover between the Portable and
        Permanently installed systems. IMH can show the HDPQ series working with
        the Multi-Mobile Data source SIM that will communicate via the strongest
        mobile signal found - either O2, Vodaphone, EE etc. Many hours can be
        saved by remotely checking, correcting setups and downloading the stored
        data without the need to visit site. Crucially the Dranview Software has
        a built in report writer to give Pass/Fail on a G5/5 harmonics analysis.
      </Paragraph>

      <Image
        className="mx-auto max-w-full text-center shadow-lg lg:max-w-(--breakpoint-md)"
        src={refImage}
        alt="G5-5 Data"
        placeholder="blur"
      />
    </article>
  </Container>
);

export default Page;
