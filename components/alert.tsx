import type { FunctionComponent } from "react";
import Container from "./container";
import Link from "next/link";

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
          className="underline transition-colors duration-200 hover:text-cyan"
        >
          Click here
        </Link>{" "}
        to exit preview mode.
      </div>
    )}
  </Container>
);

export default Alert;
