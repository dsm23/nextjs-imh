"use server";

import { Resend } from "resend";
import Email from "./emails";
import type { Values } from "./schema";

const sendEmail = async ({ name, email, message }: Values) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "IMH site contact page <onboarding@resend.dev>",
    to: ["ian@imh.co.uk", "admin@imh.co.uk"],
    subject: "Hello World",
    react: <Email name={name} email={email} message={message} />,
  });
};

export default sendEmail;
