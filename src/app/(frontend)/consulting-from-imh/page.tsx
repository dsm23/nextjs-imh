import type { FunctionComponent } from "react";
import type { Metadata } from "next";
import Container from "~/components/container";
import Li from "~/components/list-item";
import Paragraph from "~/components/paragraph";
import Ul from "~/components/unordered-list";

export function generateMetadata(): Metadata {
  return {
    title: `IMH | Consulting from IMH`,
    description: "Some information about our consulting proficiencies",
    openGraph: {
      title: `IMH | Consulting from IMH`,
      description: "Some information about our consulting proficiencies",
    },
  };
}

const Page: FunctionComponent = () => (
  <Container>
    <article>
      <h1 className="my-8 text-2xl leading-tight font-bold tracking-tight md:text-4xl md:tracking-tighter">
        Consulting from IMH
      </h1>

      <Paragraph>
        As well as distributors of Electrical Monitoring Equipment, IMH
        Technologies Ltd offer a first class service utilising them. Over the
        last 10 years we have worked for many of the Utilities and major
        companies such as:
      </Paragraph>

      <Ul>
        <Li> ABB</Li>

        <Li>Skanska</Li>

        <Li>Vertiv</Li>

        <Li>Morgan Stanley</Li>

        <Li>GCHQ</Li>
      </Ul>

      <Paragraph>Our expertise is called upon for:</Paragraph>

      <Ul>
        <Li>Flicker Studies - before and after remedial works</Li>

        <Li>G5-x Harmonic Studies</Li>

        <Li>Nuisance Trips</Li>

        <Li>Voltage unbalance investigations</Li>

        <Li>Load Profile Studies</Li>

        <Li>Motor Inrush - Motor Performance</Li>
      </Ul>
    </article>
  </Container>
);

export default Page;
