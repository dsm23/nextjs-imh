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
          className="underline hover:text-cyan duration-200 transition-colors"
        >
          Click here
        </a>{" "}
        to exit preview mode.
      </div>
    )}
  </Container>
);

export default Alert;
