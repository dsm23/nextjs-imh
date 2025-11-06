import type { FunctionComponent } from "react";
import type { Metadata } from "next";
import Container from "~/components/container";
import Paragraph from "~/components/paragraph";

export function generateMetadata(): Metadata {
  return {
    title: `IMH | About Us`,
    description: "A brief description about us",
    openGraph: {
      title: `IMH | About Us`,
      description: "A brief description about us",
    },
  };
}

const Page: FunctionComponent = () => (
  <Container>
    <article>
      <h1 className="my-8 text-2xl leading-tight font-bold tracking-tight md:text-4xl md:tracking-tighter">
        About Us
      </h1>
      <Paragraph>
        IMH Technologies offers fixed installations and portable instruments
        from major manufacturers around the globe to measure the properties of
        Electrical Power systems, both AC and DC. Also IMH can provide UK based
        consultancy services to assess load, harmonics, flicker and generally
        hunt down power quality issues when electrical systems do not conform to
        international norms. If required we can call upon the services of the
        internationally renowned "Electrotek systems" company of Tennessee whose
        engineers can provide an independent program of works to measure and
        improve power quality related issues in distributed electrical systems.
      </Paragraph>
    </article>
  </Container>
);

export default Page;
