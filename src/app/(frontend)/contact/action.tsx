"use server";

import { Resend } from "resend";
import Email from "./emails";
import type { Values } from "./schema";

const sendEmail = async ({ name, email, message }: Values) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: `IMH site contact page <${process.env.NEXT_PUBLIC_CONTACT_EMAIL_FROM}>`,
    to: process.env.NEXT_PUBLIC_CONTACT_EMAIL_TO?.split(",") ?? [],
    subject: "New contact form submission",
    react: <Email name={name} email={email} message={message} />,
  });
};

export default sendEmail;
