"use client";

import { useCallback, useState } from "react";
import type { FunctionComponent } from "react";
import { useRouter, useSelectedLayoutSegments } from "next/navigation";
import { PayloadAdminBar } from "payload-admin-bar";
import type { PayloadAdminBarProps, PayloadMeUser } from "payload-admin-bar";
import { cn } from "~/utilities/ui";

import "./index.scss";

import { getClientSideURL } from "~/utilities/getURL";

const baseClass = "admin-bar";

const collectionLabels = {
  pages: {
    plural: "Pages",
    singular: "Page",
  },
  posts: {
    plural: "Posts",
    singular: "Post",
  },
  projects: {
    plural: "Projects",
    singular: "Project",
  },
} as const;

const Title: FunctionComponent = () => <span>Dashboard</span>;

type Props = {
  adminBarProps?: PayloadAdminBarProps;
};

export const AdminBar: FunctionComponent<Props> = ({ adminBarProps }) => {
  const segments = useSelectedLayoutSegments();
  const [show, setShow] = useState(false);
  const collection =
    segments[1] in collectionLabels
      ? (segments[1] as keyof typeof collectionLabels)
      : "pages";
  const router = useRouter();

  const onAuthChange = useCallback((user: PayloadMeUser) => {
    setShow(Boolean(user?.id));
  }, []);

  const handlePreviewExit = async () => {
    await fetch("/next/exit-preview");

    router.push("/");
    router.refresh();
  };

  return (
    <div
      className={cn(baseClass, "bg-black py-2 text-white", {
        block: show,
        hidden: !show,
      })}
    >
      <div className="container">
        <PayloadAdminBar
          {...adminBarProps}
          className="py-2 text-white"
          classNames={{
            controls: "font-medium text-white",
            logo: "text-white",
            user: "text-white",
          }}
          cmsURL={getClientSideURL()}
          collection={collection}
          collectionLabels={{
            plural: collectionLabels[collection].plural,
            singular: collectionLabels[collection].singular,
          }}
          logo={<Title />}
          onAuthChange={onAuthChange}
          onPreviewExit={() => handlePreviewExit()}
          style={{
            backgroundColor: "transparent",
            padding: 0,
            position: "relative",
            zIndex: "unset",
          }}
        />
      </div>
    </div>
  );
};
