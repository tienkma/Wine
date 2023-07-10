import React, {
  ChangeEventHandler,
  Fragment,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  useForm,
  Controller,
  Control,
  FieldValues,
  FormState,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormStateReturn,
  UseFormRegister,
} from "react-hook-form";

export interface InputPropsComponent
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  hiddenError?: boolean;
  required?: boolean;
  defaultValue?: any;
  rules?: any;
  register: UseFormRegister<FieldValues>;
  customInput?: ({
    field,
    fieldState,
    formState,
  }: {
    field: ControllerRenderProps<any, string>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<any>;
  }) => any;
  formState: FormState<FieldValues>;
  control: Control<any, any>;
}

export const classNameInput =
  "block w-full p-2 text-gray-900 border-gray-300 bg-gray-20 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-0 !border rounded";

const InputComponent = (props: InputPropsComponent) => {
  const {
    label,
    name,
    register,
    onChange,
    customInput,
    required,
    control,
    defaultValue,
    rules,
    formState,
    className,
    ...restProps
  } = props;

  const { errors, touchedFields, isSubmitted } = formState;

  return (
    <div className={label ? "mb-2.5" : ""}>
      {label && (
        <label htmlFor={props.id} className="text-sm mb-2 border-red-500">
          {label}
        </label>
      )}

      {customInput ? (
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue || ""}
          rules={rules}
          render={(propsRender) => customInput(propsRender)}
        />
      ) : (
        <input
          {...{
            className: `${classNameInput} ${className} ${
              errors && errors[name] ? "border-red-500" : ""
            }`,
          }}
          {...(restProps || {})}
          {...register(name)}
        />
      )}

      {props.hiddenError ||
      !(
        errors &&
        errors[name] &&
        (touchedFields[name] || isSubmitted)
      ) ? null : (
        <div className="block mt-1 text-sm text-[#dc3545] ">
          <>{errors[name]?.message}</>
        </div>
      )}
    </div>
  );
};

export const InputField = memo(InputComponent);
