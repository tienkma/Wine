import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { isNumber, some } from "lodash";
import { HiCheck } from "react-icons/hi2";
import { HookForm } from "../components/form/HookForm";
import { InputField } from "../components/form/HookFormInput";
import { RouterName } from "../routers/RouterName";
import authApi from "../api/authApi";

export const listValidatePassword = [
  {
    value: "lowercase",
    label: "one_lowercase_character",
    checkValidate: (value: string) => {
      return some([...value], function (char) {
        return /[a-z]/.test(char);
      });
    },
  },
  {
    value: "uppercase",
    label: "one_uppercase_character",
    checkValidate: (value: string) => {
      return some([...value], function (char) {
        return /[A-Z]/.test(char);
      });
    },
  },
  {
    value: "oneNumber",
    label: "one_number",
    checkValidate: (value: string) => {
      return /\d/.test(value);
    },
  },
  {
    value: "minLength",
    label: "length_characters_minimum",
    checkValidate: (value: string) => {
      const isMinLength = value.length > 7 ? true : false;
      return isMinLength;
    },
  },
];

export const getStatusValidatePassword = (
  value: string,
  validateValue?: string
) => {
  if (!value) {
    return false;
  }

  if (!validateValue) {
    const isValidate = listValidatePassword.every((validate) => {
      return validate.checkValidate(value);
    });
    return isValidate;
  }

  const validate = listValidatePassword.find(
    (item) => item.value === validateValue
  );

  return validate?.checkValidate(value);
};

const Register = (props: any) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [registerError, setRegisterError] = useState<string>("");
  let navigate = useNavigate();

  const { handleSubmit, formState, control, getValues, watch, register } =
    useForm({
      resolver: yupResolver(
        Yup.object({
          name: Yup.string().required("username_required"),
          email: Yup.string().email().required("email_required").nullable(),
          password: Yup.string()
            .min(8)
            .matches(/[a-z]/, "required_lowercase")
            .matches(/[A-Z]/, "required_uppercase")
            .matches(/[0-9]/, "required_number")
            .required("password_required"),
        })
      ),
    });
  watch("password");

  const onSubmit = async (values: any) => {
    try {
      const result = await authApi.register(values);
      if (result.token && result.user?.id) {
        // navigate(RouterName.LOGIN);
        setIsSuccess(true);
      }
    } catch (error: any) {
      setRegisterError(error.response?.data.message || error.message);
    } finally {
    }
  };

  const onFormChange = () => {
    setRegisterError("");
  };

  return (
    <React.Fragment>
      <div className="min-h-screen grid  flex-col lg:flex-row bg-white relative">
        <div className=" flex overflow-auto px-10 lg:px-20 py-20">
          <div className="w-full max-w-xl mx-auto my-auto">
            <h1
              className="text-center text-4xl text-blue-900 font-display font-semibold xl:text-5xl
                    xl:text-bold "
            >
              Sign up
            </h1>
            {isSuccess ? (
              <>
                <div className="w-20 h-20 rounded-full bg-green-200 mx-auto mt-8">
                  <div className="flex justify-center items-center w-full h-full">
                    <HiCheck size={32} className="text-green-600" />
                  </div>
                </div>

                <p className="text-center text-sm font-normal mt-2">
                  {"register_success"}
                </p>
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
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Name
                    </div>
                    <InputField
                      className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-600 !ring-0 max-lg:text-base  pl-0 rounded-none !border-t-0 !border-x-0"
                      register={register}
                      name="name"
                      id="name"
                      control={control}
                      formState={formState}
                      placeholder="Enter your Name"
                      autoComplete="on"
                    />
                  </div>
                </div>{" "}
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Email Address
                  </div>
                  <InputField
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-600 !ring-0 max-lg:text-base  pl-0 rounded-none !border-t-0 !border-x-0"
                    register={register}
                    type="text"
                    name="email"
                    id="email"
                    control={control}
                    formState={formState}
                    placeholder="mike@gmail.com"
                    autoComplete="on"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                  <InputField
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-600 !ring-0 max-lg:text-base  pl-0 rounded-none !border-t-0 !border-x-0"
                    register={register}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    control={control}
                    formState={formState}
                    autoComplete="on"
                  />
                </div>{" "}
                <div className="grid grid-cols-2 ">
                  {listValidatePassword.map((item, idx) => {
                    const validate = getStatusValidatePassword(
                      getValues("password"),
                      item.value
                    );
                    return (
                      <div key={item.value} className="flex items-center">
                        <div
                          className={`mr-2 w-2.5 h-2.5 rounded-full ${
                            validate ? "bg-green-600 " : "bg-slate-400 "
                          }`}
                        ></div>
                        <p
                          className={`mb-0 text-sm ${
                            validate ? "font-medium" : " "
                          }`}
                        >
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-12">
                  <button
                    className="bg-background text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-color transition-colors
                                shadow-lg"
                  >
                    Create my account
                  </button>
                </div>
              </HookForm>
            )}
            <p className="text-slate-500 text-center mt-4 block">
              <Link
                to={RouterName.LOGIN}
                className="text-blue-600 text-sm font-medium"
              >
                Return to {"login"}?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
