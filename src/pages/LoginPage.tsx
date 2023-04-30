import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Toasts } from "../utils/notification";
import { isEmpty } from "lodash";
import { Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginPage = () => {
  const [displayLogin, setDisplayLogin] = useState(true);
  return (
    <main id="login">
      <div className="form">
        {displayLogin ? (
          <SignIn setDisplayLogin={setDisplayLogin} />
        ) : (
          <SignUp setDisplayLogin={setDisplayLogin} />
        )}
      </div>
      <Link
        to="/"
        className="backHome fixed bottom-4 right-4 w-10 h-10 flex justify-center items-center bg-red-400 rounded-full"
      >
        <AiFillHome size="18" />
      </Link>
    </main>
  );
};

const SignIn = ({ setDisplayLogin }: any) => {
  // const { setIsLogin } = useHomeContact();
  // const [isValidation, setIsValidation] = useState(false);
  // const history = useHistory();
  // const { setUsers } = UseUserContext();
  // const { getListCart } = useCartContext();

  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(
      Yup.object({
        email: Yup.string()
          .email("Email must be a valid email")
          .required("Please enter the value Email"),
        password: Yup.string().required().min(8, "Your password is too short."),
      })
    ),
  });

  // TODO user
  const onSubmit = async (value: any) => {
    try {
    } catch (error) {
      console.log(`authen ${error}`);
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring  ring-purple-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-background underline uppercase decoration-wavy">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 border-solid border-black text-background bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 border-solid border-black text-background bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="#" className="font-medium text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export const signUnSchema = Yup.object({
  email: Yup.string().email().required("Please enter the value Email"),
  name: Yup.string().required("Please enter the value Name"),
  password: Yup.string()
    .min(8, "Your password is too short.")
    .required("Please enter the value Password"),
});

const SignUp = ({ setDisplayLogin }: any) => {
  const [isValidation, setIsValidation] = useState(false);

  const handleSubmit = async (value: any, helpers: any) => {
    setIsValidation(true);
    try {
    } catch (error) {
      console.log(`authen ${error}`);
    }
  };

  return (
    <>
      <form
        className="signUp"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        autoComplete="off"
        method="POST"
      >
        <h2>SIGN UP</h2>
        <div className="form-error"></div>
        <Button type="submit" onClick={() => setIsValidation(true)}>
          Register
        </Button>
        <h5>
          Already have an account?{" "}
          <Button onClick={() => setDisplayLogin(true)}>Sign in</Button>
        </h5>
      </form>
    </>
  );
};

export default LoginPage;
