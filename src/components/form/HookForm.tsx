import React, { useEffect, useState } from "react"
import { FormikHelpers } from "formik"
import { Alert, Form, FormProps } from "reactstrap"
import { FormikHandlers, FormikState } from "formik/dist/types"
import { Forms } from "../../utils/forms"
import { Toasts } from "../../core/notification/notifications"
import { t } from "../../core/translations"
import { Labels } from "../../common/labels"
import { Messages } from "../../common/messages"
import { Logger } from "core/logger"
import { flattenDeep } from "lodash"
import { FormState } from "react-hook-form"
import { Loading } from "components/common/Loading"

export interface ProductTypeFormProps extends FormProps {
  error?: string
  formState: FormState<any>
  children: any
  isLoading?: boolean
}

export const HookForm = (props: ProductTypeFormProps) => {
  const { children, error, formState, onSubmit, isLoading, ...rest } = props
  const { errors, isSubmitted } = formState
  const [errorMessage, setErrorMessage] = useState(error)
  const [errorsState, setErrorsState] = useState<any[]>([])

  useEffect(() => {props.error && setErrorMessage(props.error)}, [error])
  useEffect(() => {
    // Logger.debug('submitData', validation.values)
    let errorsList = Forms.getErrorMessages(errors)
    if (isSubmitted) {
      setErrorsState(errorsList)
    }
    if (isSubmitted && errorsList?.length) {
      Toasts.error(t(Messages.form_has_invalid_field))
    }
  }, [isSubmitted, errors])

  if(isLoading){
    return <Loading />
  }

  return (
    <Form
      {...rest}
      onSubmit={
        props.onSubmit ||
        (e => {
          e.preventDefault()
        })
      }
    >
      {errorMessage ? <Alert color="danger">{errorMessage}</Alert> : null}
      {!errorsState.length ? null : (
        <Alert color="danger">
          {flattenDeep(errorsState).map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </Alert>
      )}
      {children}
    </Form>
  )
}
