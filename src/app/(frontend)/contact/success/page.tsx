import Link from "next/link";
import type { Metadata } from "next";
import Anchor from "~/components/anchor";
import Container from "~/components/container";

export const metadata: Metadata = {
  title: "IMH | Contact Success",
  description: "Thank you for reaching out to us",
  openGraph: {
    title: "IMH | Contact Success",
    description: "Thank you for reaching out to us",
  },
};

const Contact = () => (
  <Container>
    <article>
      <h1 className="my-8 text-2xl leading-tight font-bold tracking-tight md:text-4xl md:tracking-tighter">
        Thank You
      </h1>

      <p className="text-lg leading-relaxed text-gray-700">
        Thank you for getting in touch! We have received your message and will
        get back to you as soon as possible. Would you like to return to the{" "}
        <Anchor asChild>
          <Link href="/">homepage</Link>
        </Anchor>
        ?
      </p>
    </article>
  </Container>
);

export default Contact;
