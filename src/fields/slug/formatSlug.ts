import type { FieldHook, TypeWithID } from "payload";

export const formatSlug = (val: string): string =>
  val
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .toLowerCase();

type Data = TypeWithID & {
  slug?: string;
  [key: string]: unknown;
};

export const formatSlugHook =
  (fallback: string): FieldHook<Data, unknown> =>
  ({ data, operation, value }) => {
    if (typeof value === "string") {
      return formatSlug(value);
    }

    if (operation === "create" || !data?.slug) {
      const fallbackData = data?.[fallback] || data?.[fallback];

      if (fallbackData && typeof fallbackData === "string") {
        return formatSlug(fallbackData);
      }
    }

    return value;
  };
