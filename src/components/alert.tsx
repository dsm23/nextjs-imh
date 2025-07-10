import type { FunctionComponent } from "react";
import Link from "next/link";
import Container from "./container";

type Props = {
  preview: boolean;
};

const Alert: FunctionComponent<Props> = ({ preview }) => (
  <Container>
    {!preview ? null : (
      <div className="py-2 text-center text-sm">
        This is page is a preview.{" "}
        <Link
          href="/api/exit-preview"
          className="hover:text-cyan underline transition-colors duration-200"
        >
          Click here
        </Link>{" "}
        to exit preview mode.
      </div>
    )}
  </Container>
);

export default Alert;
