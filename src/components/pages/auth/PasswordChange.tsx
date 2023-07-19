// import { useFormik } from "formik";
// import { isEmpty } from "lodash";
// import React, { useState } from "react";
// import * as Yup from "yup";
// import { Toasts } from "../../../utils/notification";
// import { Requests } from "../../../utils/request";
// import { URL_REQUEST } from "../../../utils/URL";
// import { Storage } from "../../../utils/local";

// const PasswordChange = () => {
//   const [valueUser, setValueUser] = useState<any>({});
//   const [isValidation, setIsValidation] = useState(false);
//   const id = Storage.getLocal("users").id;

//   const validation = useFormik({
//     initialValues: valueUser,
//     enableReinitialize: true,
//     validateOnBlur: false,
//     validationSchema: Yup.object({
//       password: Yup.string().required("Please enter the value password"),
//       retypePassword: Yup.string()
//         .required("Please enter the value retype password")
//         .oneOf([Yup.ref("newPassword"), ""], "Retype password must match"),
//       newPassword: Yup.string()
//         .required("Please enter the value New Password")
//         .min(8, "Your password is too short."),
//     }),
//     onSubmit: (value: any) => handleSubmit(value),
//   });

//   const handleSubmit = async (value: any) => {
//     const { password, newPassword } = value;
//     console.log("password", password);
//     try {
//       const data = await Requests.post(`${URL_REQUEST}/api/v1/user/${id}`, {
//         password,
//         newPassword,
//       });
//       if (data?.error) {
//         return Toasts.error(data?.error.msg);
//       }
//       window.location.reload();
//       setTimeout(() => {
//         Toasts.success("Change Password Success");
//       }, 0);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <form onSubmit={(e) => e.preventDefault()}>
//       <h1>Change Password</h1>
//       <hr />
//       {!isEmpty(validation.errors) && isValidation && (
//         <div
//           style={{
//             background: "#fde1e1",
//             borderRadius: "10px",
//             padding: "10px",
//           }}
//           className="inputLine mb-0"
//         >
//           <ul className="lineRight">
//             {Object.entries(validation.errors).map((item) => (
//               <li
//                 key={item[0]}
//                 style={{
//                   fontSize: "15px",
//                   listStyle: "disc",
//                   marginLeft: "20px",
//                 }}
//               >
//                 {item[1]}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <div className="form-error"></div>
//       <div className="form_content">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           value={validation.values.password}
//           onChange={(e) => validation.setFieldValue("password", e.target.value)}
//         />
//       </div>

//       <div className="form_content">
//         <label htmlFor="newPassword">New Password</label>
//         <input
//           type="password"
//           id="newPassword"
//           value={validation.values.newPassword}
//           onChange={(e) =>
//             validation.setFieldValue("newPassword", e.target.value)
//           }
//         />
//       </div>
//       <div className="form_content">
//         <label htmlFor="retypePassword">Retype Password</label>
//         <input
//           type="password"
//           id="retypePassword"
//           value={validation.values.retypePassword}
//           onChange={(e) =>
//             validation.setFieldValue("retypePassword", e.target.value + "")
//           }
//         />
//       </div>
//       <button
//         type="submit"
//         className="btn"
//         onClick={() => {
//           validation.submitForm();
//           if (!isValidation && !isEmpty(validation.errors)) {
//             setIsValidation(true);
//           }
//         }}
//       >
//         Save
//       </button>
//     </form>
//   );
// };
const PasswordChange = () => {
  return <></>;
};

export default PasswordChange;
