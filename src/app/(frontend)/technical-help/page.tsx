import type { FunctionComponent } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import refImage from "~/assets/techpic.png";
import Container from "~/components/container";
import Paragraph from "~/components/paragraph";

export function generateMetadata(): Metadata {
  return {
    title: `IMH | Technical Help`,
    description: "Some information about our technical help",
    openGraph: {
      title: `IMH | Technical Help`,
      description: "Some information about our technical help",
    },
  };
}

const Page: FunctionComponent = () => (
  <Container>
    <article>
      <h1 className="my-8 text-2xl leading-tight font-bold tracking-tight md:text-4xl md:tracking-tighter">
        Technical Help
      </h1>
      <Paragraph>
        In the UK we often come across an HV installation where there are two
        CT's with the Yellow Phase as Common. Great care should be taken,
        especially when 'jumpering' the yellow phase to A- and B- inputs.
      </Paragraph>

      <Image
        className="mx-auto max-w-full text-center shadow-lg lg:max-w-(--breakpoint-md)"
        src={refImage}
        alt="3 phase diagram"
        placeholder="blur"
      />
    </article>
  </Container>
);

export default Page;
