// oxlint-disable react/jsx-no-constructed-context-values, typescript/no-unnecessary-condition

import { createContext, useContext, useId } from "react";
import type { ComponentProps } from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import Input from "~/components/ui/input";
import Label from "~/components/ui/label";
import cn from "~/lib/class-names";

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

type FormItemContextValue = {
  id: string;
};

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const fieldState = getFieldState(fieldContext.name, formState);
  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const FormItem = ({ className, ref, ...props }: ComponentProps<"div">) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("grid gap-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
};

const FormLabel = ({ className, ref, ...props }: ComponentProps<"label">) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(
        "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        error && "text-destructive",
        className,
      )}
      htmlFor={formItemId}
      {...props}
    />
  );
};

const FormControl = ({ ref, ...props }: ComponentProps<"input">) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Input
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
};

const FormMessage = ({
  className,
  children,
  ref,
  ...props
}: ComponentProps<"p">) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error.message) : children;

  if (!body) return null;

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-[0.8rem] font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
};

export { FormItem, FormLabel, FormControl, FormMessage, FormField };
