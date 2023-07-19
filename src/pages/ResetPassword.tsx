// import { yupResolver } from "@hookform/resolvers/yup"
// import { InputField } from "components/form/HookFormInput"
// import { useForm } from "react-hook-form"
// import { Link, useHistory, useLocation } from "react-router-dom"
// import * as Yup from "yup"
// import { getStatusValidatePassword, listValidatePassword } from "./Register"
// import { HookForm } from "components/form/HookForm"
// import { IdentityActions } from "./auth.action"
// import ActionButton from "components/input/ActionButton"
// import { useState } from "react"
// import { HiCheck } from "react-icons/hi2"

// export const ResetPassword = () => {
//   // const urlParams = new URLSearchParams(window.location.search)
//   // const token = urlParams.ge"token")
//   const email = "";
//   const search = useLocation().search
//   const searchParams = new URLSearchParams(search)

//   const token = searchParams.get('token')

//   const history = useHistory()
//   const [isSuccess, setIsSuccess] = useState(false)
//   const [resetPasswordError, setResetPasswordError] = useState("")

//   const { register, handleSubmit, formState, control, getValues, watch } = useForm<Record<string, string | null>>({
//     defaultValues: {
//       email,
//       token,
//     },
//     resolver: yupResolver(
//       Yup.object({
//         email: Yup.string().email().required("email_required").nullable(),
//         newPassword: Yup.string()
//           .min(8, "min_password")
//           .matches(/[a-z]/, "required_lowercase")
//           .matches(/[A-Z]/, "required_uppercase")
//           .matches(/[0-9]/, "required_number")
//           .required("password_required"),
//         confirmPassword: Yup.string()
//           .required("repeat_password_required")
//           .test("matchPassword", (value: any, context: Yup.TestContext) => {
//             if (value !== context.parent?.newPassword) {
//               return context.createError({ message: "match_password" })
//             }
//             return true
//           }),
//       })
//     ),
//   })

//   watch("newPassword")

//   const onSubmit = async (values: any) => {
//     try {
//       onFormChange()
//       const result = await IdentityActions.resetPassword(values)
//       if (result?.id) {
//         setIsSuccess(true)
//       }
//     } catch (error: any) {
//       setResetPasswordError(error.response?.data.message || error?.message)
//     }
//   }

//   const onFormChange = () => {}

//   return (
//     <div className=" flex overflow-auto px-10 lg:px-20 h-screen bg-white">
//       <div className="w-full max-w-lg mx-auto my-auto">
//         <h1 className="text-black font-bold mb-3 text-center">Reset password</h1>
//         {isSuccess ? (
//           <>
//             <div className="w-20 h-20 rounded-full bg-green-200 mx-auto mt-8">
//               <div className="flex justify-center items-center w-full h-full">
//                 <HiCheck size={32} className="text-green-600" />
//               </div>
//             </div>

//             <p className="text-center text-sm font-normal mt-2">{"reset_password_success"}</p>
//           </>
//         ) : (
//           <HookForm
//             formState={formState}
//             id="login-form"
//             error={resetPasswordError}
//             className="mt-10 space-y-6"
//             onChange={onFormChange}
//             onSubmit={handleSubmit(onSubmit)}
//           >
//             <InputField
//               type="text"
//               name="email"
//               id="email"
//               control={control}
//               label={"email_address"}
//               formState={formState}
//               placeholder={"email_and_address_hint"}
//               autoComplete="on"
//             />

//             <InputField
//               type="password"
//               name="newPassword"
//               id="newPassword"
//               control={control}
//               label={"password"}
//               formState={formState}
//               placeholder={"password_hint"}
//               autoComplete="on"
//             />
//             <div className="grid grid-cols-2 ">
//               {listValidatePassword.map((item, idx) => {
//                 const validate = getStatusValidatePassword(getValues("newPassword") || "", item.value)
//                 return (
//                   <div key={item.value} className="flex items-center mt-1">
//                     <div className={`mr-2 w-2.5 h-2.5 rounded-full ${validate ? "bg-green-600 " : "bg-slate-400 "}`}></div>
//                     <p className={`mb-0 font-13 ${validate ? "font-medium" : " "}`}>{item.label}</p>
//                   </div>
//                 )
//               })}
//             </div>
//             <InputField
//               type="password"
//               name="confirmPassword"
//               id="confirmPassword"
//               control={control}
//               label={"repeat_password"}
//               formState={formState}
//               placeholder={"repeat_password_hint"}
//               autoComplete="on"
//             />
//             <ActionButton
//               type="submit"
//               onClick={handleSubmit(onSubmit)}
//               className="transition-colors py-3 px-6 bg-blue-600 hover:bg-blue-500 rounded-md w-full text-white font-medium"
//             >
//               {"reset_password"}
//             </ActionButton>
//           </HookForm>
//         )}
//         <p  className="text-slate-500 text-center mt-4 block">
//             <Link to={linkServiceUrl(RouteNames.SIGN_IN)} className="text">
//             Return to {"login"}?
//             </Link>
//         </p>
//       </div>
//     </div>
//   )
// }

const Resetpass = () => {
  return <></>;
};

export default Resetpass;
