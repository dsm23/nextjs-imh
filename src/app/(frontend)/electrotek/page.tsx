import type { FunctionComponent } from "react";
import type { Metadata } from "next";
import Anchor from "~/components/anchor";
import Container from "~/components/container";
import Paragraph from "~/components/paragraph";

export function generateMetadata(): Metadata {
  return {
    title: `IMH | Electrotek Systems`,
    description: "Some information about Electrotek Systems",
    openGraph: {
      title: `IMH | Electrotek Systems`,
      description: "Some information about Electrotek Systems",
    },
  };
}

const Page: FunctionComponent = () => (
  <Container>
    <article>
      <h1 className="my-8 text-2xl leading-tight font-bold tracking-tight md:text-4xl md:tracking-tighter">
        Electrotek Systems
      </h1>
      <Paragraph>
        Click here to go straight to the{" "}
        <Anchor asChild>
          <a href="https://www.electrotek.com/">Electrotek website</a>
        </Anchor>
        .
      </Paragraph>
      <Paragraph>
        Distributed systems of Power Quality Analysers gather considerable
        quantities of data. Electrotek specialises in PQView4 and PQWeb software
        that are able to make sense of all this data to produce meaningful
        reports and year-on-year comparisons.
      </Paragraph>
    </article>
  </Container>
);

export default Page;
