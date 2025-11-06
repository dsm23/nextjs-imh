import type { FunctionComponent } from "react";
import type { Metadata } from "next";
import Anchor from "~/components/anchor";
import Container from "~/components/container";
import Paragraph from "~/components/paragraph";

export function generateMetadata(): Metadata {
  return {
    title: `IMH | Dent Instruments`,
    description: "Some information about Powerside",
    openGraph: {
      title: `IMH | Dent Instruments`,
      description: "Some information about Powerside",
    },
  };
}

const Page: FunctionComponent = () => (
  <Container>
    <article>
      <h1 className="my-8 text-2xl leading-tight font-bold tracking-tight md:text-4xl md:tracking-tighter">
        Dent Instruments
      </h1>
      <Paragraph>
        Click here to go straight to the{" "}
        <Anchor asChild>
          <a href="https://www.dentinstruments.com/">
            Dent Instruments Inc website
          </a>
        </Anchor>
        .
      </Paragraph>
      <Paragraph>
        Probably the neatest, smallest, lightest, professional Energy Logger
        available at any price is the low-cost ElitePro XC from Dent Instruments
        Inc of Bend, Oregon, USA. This can measure AC and DC Voltages, AC
        Current and usefully has four Analog inputs too.
      </Paragraph>
    </article>
  </Container>
);

export default Page;
