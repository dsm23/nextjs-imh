"use client";

import type { FormHTMLAttributes, FunctionComponent } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import Button from "~/components/button";
import Input from "~/components/input";
import Textarea from "~/components/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/form";
import { Toaster, useToast } from "~/components/toaster";
import cn from "~/lib/class-names";
import sendEmail from "./action";
import { schema } from "./schema";
import type { Values } from "./schema";

type Props = FormHTMLAttributes<HTMLFormElement>;

const Form: FunctionComponent<Props> = ({ className, ...props }) => {
  const { toast } = useToast();

  const form = useForm<Values>({
    defaultValues: {
      name: undefined,
      email: undefined,
      message: undefined,
    },
    mode: "onChange",
    resolver: valibotResolver(schema),
  });

  const { control, formState, handleSubmit } = form;

  const { isSubmitting } = formState;

  const onSubmit: SubmitHandler<Values> = async (values) => {
    await sendEmail(values);

    toast({
      title: "Email sent successful",
      description: new Date().toUTCString(),
    });
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
              <FormLabel>Name*</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email*</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message*</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
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
      <Toaster />
    </FormProvider>
  );
};

export default Form;
