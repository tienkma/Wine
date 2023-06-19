import React, { useState } from "react"

import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useHistory, useLocation } from "react-router-dom"
import * as Yup from "yup"
import { useForm, Controller } from "react-hook-form"
import { InputField } from "components/form/HookFormInput"
import { isNumber, some } from "lodash"
import { HookForm } from "components/form/HookForm"
import { HiCheck } from "react-icons/hi2"

export const listValidatePassword = [
  {
    value: "lowercase",
    label: "one_lowercase_character",
    checkValidate: (value: string) => {
      return some([...value], function (char) {
        return /[a-z]/.test(char)
      })
    },
  },
  {
    value: "uppercase",
    label: "one_uppercase_character",
    checkValidate: (value: string) => {
      return some([...value], function (char) {
        return /[A-Z]/.test(char)
      })
    },
  },
  {
    value: "oneNumber",
    label: "one_number",
    checkValidate: (value: string) => {
      return /\d/.test(value)
    },
  },
  {
    value: "minLength",
    label: "length_characters_minimum" ,
    checkValidate: (value: string) => {
      const isMinLength = value.length > 7 ? true : false
      return isMinLength
    },
  },
]

export const getStatusValidatePassword = (value: string, validateValue?: string) => {
  if (!value) {
    return false
  }

  if (!validateValue) {
    const isValidate = listValidatePassword.every(validate => {
      return validate.checkValidate(value)
    })
    return isValidate
  }

  const validate = listValidatePassword.find(item => item.value === validateValue)

  return validate?.checkValidate(value)
}

const Register = (props: any) => {
  const history = useHistory()
  const [isSuccess, setIsSuccess] = useState(false)
  const [registerError, setRegisterError] = useState<string>("")
  const search = useLocation().search
  const searchParams = new URLSearchParams(search)


  const serviceName = searchParams.get('serviceName')

  const { handleSubmit, formState, control, getValues, watch } = useForm({
    resolver: yupResolver(
      Yup.object({
        username: Yup.string().required("username_required"),
        email: Yup.string().email().required("email_required").nullable(),
        password: Yup.string()
          .min(8)
          .matches(/[a-z]/, "required_lowercase")
          .matches(/[A-Z]/, "required_uppercase")
          .matches(/[0-9]/, "required_number")
          .required("password_required"),
      })
    ),
  })
  watch("password")

  const onSubmit = async (values: any) => {
    try {
    } catch (error: any) {
      setRegisterError(error.response?.data.message || error.message)
    } finally {
    }
  }

  const onFormChange = () => {
    setRegisterError("")
  }

  return (
    <React.Fragment>
      <div className="min-h-screen grid  flex-col lg:flex-row bg-white relative">
        <div className=" flex overflow-auto px-10 lg:px-20 py-20">
          <div className="w-full max-w-lg mx-auto my-auto">
            <h1 className="text-[30px] tracking-tight mb-1 text-black">Get started with a Forever Free plan</h1>
            <p className="mb-6 text-black text-base text-center">Sign up in seconds. No credit card required.</p>{" "}
            {isSuccess ? (
              <>
                <div className="w-20 h-20 rounded-full bg-green-200 mx-auto mt-8">
                  <div className="flex justify-center items-center w-full h-full">
                    <HiCheck size={32} className="text-green-600" />
                  </div>
                </div>

                <p className="text-center text-sm font-normal mt-2">{"register_success"}</p>
              </>
            ) : (
              <HookForm
                formState={formState}
                error={registerError}
                className="mt-10 space-y-6"
                onChange={onFormChange}
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="space-y-5">
                  <div>
                    <InputField
                      type="text"
                      name="company"
                      id="company"
                      label={"company_or_organization"}
                      control={control}
                      formState={formState}
                      autoComplete="on"
                    />
                  </div>{" "}
                  <div>
                    <InputField name="name" id="name" label={"name"} control={control} formState={formState} autoComplete="on" />
                  </div>
                </div>{" "}
                <div>
                  <InputField
                    type="text"
                    name="email"
                    id="email"
                    control={control}
                    formState={formState}
                    label={"email_address"}
                    autoComplete="on"
                  />
                </div>{" "}
                <div>
                  <InputField
                    type="text"
                    name="username"
                    id="username"
                    control={control}
                    formState={formState}
                    label={"username"}
                    autoComplete="on"
                  />
                </div>
                <div>
                  <InputField
                    type="password"
                    name="password"
                    id="password"
                    control={control}
                    formState={formState}
                    label={"password"}
                    autoComplete="on"
                  />
                </div>{" "}
                <div className="grid grid-cols-2 ">
                  {listValidatePassword.map((item, idx) => {
                    const validate = getStatusValidatePassword(getValues("password"), item.value)
                    return (
                      <div key={item.value} className="flex items-center">
                        <div className={`mr-2 w-2.5 h-2.5 rounded-full ${validate ? "bg-green-600 " : "bg-slate-400 "}`}></div>
                        <p className={`mb-0 text-sm ${validate ? "font-medium" : " "}`}>{item.label}</p>
                      </div>
                    )
                  })}
                </div>
                <button
                  type="submit"
                  disabled={!getStatusValidatePassword(getValues("password"))}
                  onClick={handleSubmit(onSubmit)}
                  className={`py-3 px-6 bg-blue-600 rounded-md w-full  ${
                    !getStatusValidatePassword(getValues("password")) ? "opacity-70" : "hover:bg-blue-500"
                  }`}
                >
                  <span className="mx-auto text-white font-medium">{"create_my_account"}</span>
                </button>
              </HookForm>
            )}
            <p className="text-slate-500 text-center mt-4 block">
              <Link to={""} className="text">
                Return to {"login"}?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Register
