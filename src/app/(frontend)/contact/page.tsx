import type { Metadata } from "next";
import Anchor from "~/components/anchor";
import Container from "~/components/container";
import Map from "~/components/map";
import ContactForm from "./form";

export const metadata: Metadata = {
  title: "IMH | Contact",
  description: "Contact details for the company",
  openGraph: {
    title: "IMH | Contact",
    description: "Contact details for the company",
  },
};

const Contact = () => (
  <Container>
    <article>
      <h1 className="my-8 text-2xl leading-tight font-bold tracking-tight md:text-4xl md:tracking-tighter">
        Contact Us
      </h1>
      <div className="gap-x-2 lg:flex">
        <address className="whitespace-nowrap">
          IMH Technologies Ltd
          <br />
          8 Roach View
          <br />
          Purdeys Industrial Estate
          <br />
          Rochford
          <br />
          Essex
          <br />
          SS4 1LB
          <br />
          Email: <Anchor href="mailto:sales@imh.co.uk">sales@imh.co.uk</Anchor>
          <br />
          Telephone: <Anchor href="tel:+441702545429">01702 545429</Anchor>
        </address>

        <Map token={process.env.MAPBOX_API_TOKEN as string} />
      </div>
      <ContactForm className="mx-auto mt-10 max-w-[1000px] md:mt-20" />
    </article>
  </Container>
);

export default Contact;
