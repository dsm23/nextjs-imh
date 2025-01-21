import type { FunctionComponent } from "react";
import type {
  FieldErrorsImpl,
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { useFormContext } from "react-hook-form";
import type { CheckboxField } from "@payloadcms/plugin-form-builder/types";
import { Checkbox as CheckboxUi } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";
import { Error } from "../Error";
import { Width } from "../Width";

export const Checkbox: FunctionComponent<
  CheckboxField & {
    errors: Partial<FieldErrorsImpl<Record<string, any>>>;
    getValues: UseFormGetValues<FieldValues>;
    register: UseFormRegister<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
  }
> = ({
  name,
  defaultValue,
  errors,
  label,
  register,
  required: requiredFromProps,
  width,
}) => {
  const props = register(name, { required: requiredFromProps });
  const { setValue } = useFormContext();

  return (
    <Width width={width}>
      <div className="flex items-center gap-2">
        <CheckboxUi
          defaultChecked={defaultValue}
          id={name}
          {...props}
          onCheckedChange={(checked) => {
            setValue(props.name, checked);
          }}
        />
        <Label htmlFor={name}>{label}</Label>
      </div>
      {requiredFromProps && errors[name] && <Error />}
    </Width>
  );
};
