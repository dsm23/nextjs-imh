import type { FunctionComponent } from "react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import RichText from "~/components/RichText";
import { Width } from "../Width";

type Props = {
  message: SerializedEditorState;
};

export const Message: FunctionComponent<Props> = ({ message }) => {
  return (
    <Width className="my-12" width="100">
      <RichText data={message} />
    </Width>
  );
};
