"use client";

import { useCallback, useEffect } from "react";
import type { FunctionComponent, MouseEvent } from "react";
import {
  Button,
  FieldLabel,
  TextInput,
  useField,
  useForm,
  useFormFields,
} from "@payloadcms/ui";
import type { TextFieldClientProps } from "payload";
import { formatSlug } from "./formatSlug";

type SlugComponentProps = {
  fieldToUse: string;
  checkboxFieldPath: string;
} & TextFieldClientProps;

export const SlugComponent: FunctionComponent<SlugComponentProps> = ({
  field,
  fieldToUse,
  checkboxFieldPath: checkboxFieldPathFromProps,
  path,
  readOnly: readOnlyFromProps,
}) => {
  const { label } = field;

  const checkboxFieldPath = path.includes(".")
    ? `${path}.${checkboxFieldPathFromProps}`
    : checkboxFieldPathFromProps;

  const { value, setValue } = useField<string>({ path: path || field.name });

  const { dispatchFields } = useForm();

  // The value of the checkbox
  // We're using separate useFormFields to minimise re-renders
  const checkboxValue = useFormFields(([fields]) => {
    return fields[checkboxFieldPath].value as string;
  });

  // The value of the field we're listening to for the slug
  const targetFieldValue = useFormFields(([fields]) => {
    return fields[fieldToUse].value as string;
  });

  useEffect(() => {
    if (checkboxValue) {
      if (targetFieldValue) {
        const formattedSlug = formatSlug(targetFieldValue);

        if (value !== formattedSlug) setValue(formattedSlug);
      } else {
        if (value !== "") setValue("");
      }
    }
  }, [targetFieldValue, checkboxValue, setValue, value]);

  const handleLock = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();

      dispatchFields({
        type: "UPDATE",
        path: checkboxFieldPath,
        value: !checkboxValue,
      });
    },
    [checkboxValue, checkboxFieldPath, dispatchFields],
  );

  const readOnly = readOnlyFromProps ?? checkboxValue;

  return (
    <div className="field-type slug-field-component">
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor={`field-${path}`} label={label} />

        <Button className="m-0 pb-1.25" buttonStyle="none" onClick={handleLock}>
          {checkboxValue ? "Unlock" : "Lock"}
        </Button>
      </div>

      <TextInput
        value={value}
        onChange={setValue}
        path={path || field.name}
        readOnly={Boolean(readOnly)}
      />
    </div>
  );
};
