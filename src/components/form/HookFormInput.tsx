import { FormFeedback, FormGroup, Input, InputGroup, Label } from "reactstrap"
import React, { ChangeEventHandler, Fragment, memo, useCallback, useEffect, useRef, useState } from "react"
import { InputProps } from "reactstrap/types/lib/Input"
import { OptionalLabel } from "components/common/OptionalLabel"
import { LabelTooltip } from "components/common/LabelTooltip"
import { useForm, Controller, Control, FieldValues, FormState, ControllerRenderProps, ControllerFieldState, UseFormStateReturn } from "react-hook-form"

export interface InputPropsComponent extends InputProps {
  name: string
  label?: string
  hiddenError?: boolean
  startComponent?: any
  endComponent?: any
  required?: boolean
  tooltip?: string
  autoTrim?: boolean
  defaultValue?: any
  rule?: any
  customInput?: ({ field, fieldState, formState }: {
    field: ControllerRenderProps<any, string>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<any>;
}) => any
  formState: FormState<FieldValues>
  control: Control<any, any>
}

export const classNameInput = 'block w-full p-2 text-gray-900 border-gray-300 bg-gray-20 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-0 !border rounded'

const InputComponent = (props: InputPropsComponent) => {
  const {
    label,
    name,
    onChange,
    startComponent,
    endComponent,
    customInput,
    required,
    tooltip,
    control,
    defaultValue,
    rules,
    formState,
    className,
    ...restProps
  } = props
  const PreInputComponent = startComponent || Fragment
  const EndInputComponent = endComponent || Fragment
  const { errors, touchedFields, isSubmitted } = formState

  return (
    <div className={label ? "mb-2.5" : ""}>
      {tooltip ? (
        required == false ? (
          <LabelTooltip tooltip={tooltip as string}>
            <OptionalLabel label={label} />
          </LabelTooltip>
        ) : (
          <LabelTooltip tooltip={tooltip as string}>{label && <Label>{label}</Label>}</LabelTooltip>
        )
      ) : required ? (
        <OptionalLabel label={label} />
      ) : (
        label && <Label  htmlFor={props.id} className="text-sm mb-2">{label}</Label>
      )}
      {customInput ? (
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue || ""}
          rules={rules}
          render={propsRender => customInput(propsRender)}
        />
      ) : (
        <InputGroup>
          <PreInputComponent />
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue || ""}
            rules={rules}
            render={({ field }) => (
              <Input invalid={errors ? !!errors[name] : false} {...{ className: `${classNameInput} ${className}` }} {...field} {...restProps || {}} />
            )}
          />
          <EndInputComponent />
        </InputGroup>
      )}

      {
        props.hiddenError || !(errors && errors[name] && (touchedFields[name] || isSubmitted)) ? null : (
          <FormFeedback className="d-block" type="invalid">
            {errors[name]?.message}
          </FormFeedback>
        )
      }
    </div>
  )
}

export const InputField = memo(InputComponent)
