"use client";

import { useState } from "react";
import type { FunctionComponent } from "react";
import { CopyIcon } from "@payloadcms/ui/icons/Copy";
import { Button } from "~/components/ui/button";

type Props = {
  code: string;
};

export const CopyButton: FunctionComponent<Props> = ({ code }) => {
  const [text, setText] = useState("Copy");

  function updateCopyStatus() {
    if (text === "Copy") {
      setText(() => "Copied!");
      setTimeout(() => {
        setText(() => "Copy");
      }, 1000);
    }
  }

  return (
    <div className="flex justify-end align-middle">
      <Button
        className="flex gap-1"
        variant={"secondary"}
        onClick={async () => {
          await navigator.clipboard.writeText(code);
          updateCopyStatus();
        }}
      >
        <p>{text}</p>
        <CopyIcon />
      </Button>
    </div>
  );
};
