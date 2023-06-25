import React, { HTMLAttributes, useEffect, useState } from "react";
// import { Forms } from "../../utils/forms";
import { flattenDeep, isString } from "lodash";
import { FormState } from "react-hook-form";
import { Toasts } from "../../utils/notification";

export interface ProductTypeFormProps extends HTMLAttributes<HTMLFormElement> {
  error?: string;
  formState: FormState<any>;
  children: any;
  isLoading?: boolean;
}

export const HookForm = (props: ProductTypeFormProps) => {
  const { children, error, formState, onSubmit, isLoading, ...rest } = props;
  const { errors, isSubmitted } = formState;
  const [errorMessage, setErrorMessage] = useState(error);
  const [errorsState, setErrorsState] = useState<any[]>([]);

  const getErrorMessages: (error: Record<string, any>) => any = (errors) => {
    if (!errors) return [];

    return Object.entries(errors)
      .map(([name, message]) => {
        let newMessage = message as Record<string, any>;
        if (Array.isArray(newMessage)) {
          newMessage = [...new Set(newMessage)];
        }
        if (isString(newMessage)) {
          return newMessage;
        }
        if (!newMessage?.message && newMessage) {
          return getErrorMessages(newMessage);
        }
        return newMessage?.message;
      })
      .filter((msg) => msg);
  };

  useEffect(() => {
    props.error && setErrorMessage(props.error);
  }, [error]);
  useEffect(() => {
    // Logger.debug('submitData', validation.values)
    let errorsList = getErrorMessages(errors);
    if (isSubmitted) {
      setErrorsState(errorsList);
    }
    if (isSubmitted && errorsList?.length) {
      Toasts.error("form_has_invalid_field");
    }
  }, [isSubmitted, errors]);

  if (isLoading) {
    // return <Loading />;
  }

  return (
    <form
      {...rest}
      onSubmit={
        props.onSubmit ||
        ((e) => {
          e.preventDefault();
        })
      }
    >
      {errorMessage ? (
        <div className="bg-red-500 relative rounded border p-4 mb-4">
          {errorMessage}
        </div>
      ) : null}
      {!errorsState.length ? null : (
        <div className="bg-red-500 relative rounded border p-4 mb-4">
          {flattenDeep(errorsState).map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </div>
      )}
      {children}
    </form>
  );
};
