import { email, minLength, nonOptional, object, string } from "valibot";
import type { Output } from "valibot";

export const schema = object({
  name: nonOptional(
    string("Not a name", [minLength(1, "Field is required")]),
    "Field is required",
  ),
  email: nonOptional(string([email()]), "Field is required"),
  message: nonOptional(string([minLength(8)]), "Field is required"),
});

export type Values = Output<typeof schema>;
