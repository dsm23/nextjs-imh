import type { FunctionComponent } from "react";
import type { Metadata } from "next";
import Anchor from "~/components/anchor";
import Container from "~/components/container";
import Paragraph from "~/components/paragraph";

export function generateMetadata(): Metadata {
  return {
    title: `IMH | Powerside`,
    description: "Some information about Powerside",
    openGraph: {
      title: `IMH | Powerside`,
      description: "Some information about Powerside",
    },
  };
}

const Page: FunctionComponent = () => (
  <Container>
    <article>
      <h1 className="my-8 text-2xl leading-tight font-bold tracking-tight md:text-4xl md:tracking-tighter">
        Powerside
      </h1>
      <Paragraph>
        To go straight to the{" "}
        <Anchor asChild>
          <a href="https://powerside.com/">Powerside website</a>
        </Anchor>
      </Paragraph>
    </article>
  </Container>
);

export default Page;
