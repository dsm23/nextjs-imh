import type { CollectionBeforeChangeHook } from "payload";

const operationSet = new Set(["create", "update"]);

export const populatePublishedAt: CollectionBeforeChangeHook = ({
  data,
  operation,
  req,
}) => {
  if (operationSet.has(operation)) {
    if (req.data && !req.data.publishedAt) {
      const now = new Date();
      return {
        ...data,
        publishedAt: now,
      };
    }
  }

  return data;
};
