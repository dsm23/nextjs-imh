"use client";

import type { FormHTMLAttributes, FunctionComponent } from "react";
import type { SubmitHandler } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { toast } from "sonner";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/form";
import { Button } from "~/components/ui/button";
import cn from "~/lib/class-names";
import sendEmail from "./action";
import { schema } from "./schema";
import type { Values } from "./schema";

type Props = FormHTMLAttributes<HTMLFormElement>;

const Form: FunctionComponent<Props> = ({ className, ...props }) => {
  const router = useRouter();

  const form = useForm<Values>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onChange",
    resolver: valibotResolver(schema),
  });

  const { control, formState, handleSubmit } = form;

  const { isSubmitting } = formState;

  const onSubmit: SubmitHandler<Values> = async (values) => {
    try {
      await sendEmail(values);

      toast.success("Email sent successful", {
        description: new Date().toUTCString(),
      });

      router.push("/contact/success");
    } catch {
      toast.error("Error sending email", {
        description: "Please try again later",
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form
        {...props}
        onSubmit={handleSubmit(onSubmit)}
        className={cn("space-y-8", className)}
      >
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl className="peer row-start-2" required {...field} />
              <FormLabel className="gap-x-0.5 peer-required:after:text-red-500 peer-required:after:content-['*']">
                Name
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl
                type="email"
                className="peer row-start-2"
                required
                {...field}
              />
              <FormLabel className="gap-x-0.5 peer-required:after:text-red-500 peer-required:after:content-['*']">
                Email
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl className="peer row-start-2" required {...field} />
              <FormLabel className="gap-x-0.5 peer-required:after:text-red-500 peer-required:after:content-['*']">
                Message
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mb-8 flex space-x-4">
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
