import type { Metadata } from "next";
import Container from "~/components/container";

export const metadata: Metadata = {
  title: "IMH | author",
  description: "details about the author",
  openGraph: {
    title: "IMH | author",
    description: "details about the author",
  },
};

const Author = () => (
  <Container>
    <article itemScope itemType="http://schema.org/Author">
      <h1
        itemProp="name"
        id="David Murdoch"
        className="my-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter"
      >
        David Murdoch
      </h1>
    </article>
  </Container>
);

export default Author;
