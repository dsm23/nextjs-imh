import { email, minLength, pipe, strictObject, string } from "valibot";
import type { InferOutput } from "valibot";

export const schema = strictObject({
  name: pipe(string("Field is required"), minLength(1)),
  email: pipe(string("Field is required"), email()),
  message: pipe(string("Field is required"), minLength(8)),
});

export type Values = InferOutput<typeof schema>;
