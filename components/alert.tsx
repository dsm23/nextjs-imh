import type { FunctionComponent } from "react";
import Container from "./container";

type Props = {
  preview: boolean;
};

const Alert: FunctionComponent<Props> = ({ preview }) => (
  <Container>
    {!preview ? null : (
      <div className="py-2 text-center text-sm">
        This is page is a preview.{" "}
        <a
          href="/api/exit-preview"
          className="underline transition-colors duration-200 hover:text-cyan"
        >
          Click here
        </a>{" "}
        to exit preview mode.
      </div>
    )}
  </Container>
);

export default Alert;
