import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Toasts } from "../utils/notification";
import { isEmpty } from "lodash";
import { Button } from "@mui/material";

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
      <Link to="/" className="backHome">
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

  const signInSchema = Yup.object({
    email: Yup.string()
      .email("Email must be a valid email")
      .required("Please enter the value Email"),
    password: Yup.string().required().min(8, "Your password is too short."),
  });



  // TODO user
  const handleSubmit = async (value: any) => {
    try {

    } catch (error) {
      console.log(`authen ${error}`);
    }
  };

  return (
    <form
      className="signIn"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      autoComplete="off"
      method="POST"
    >
      <h2>SIGN IN</h2>
      {/* <div className="form-error">
        {!isEmpty(validation.errors) &&
          isValidation &&
          Object.entries(validation.errors).map((item) => (
            <p key={item[0]}>{item[1]}</p>
          ))}
      </div>
      <div>
        <input
          type="text"
          autoComplete="off"
          value={validation.values.email}
          onChange={(e: any) => {
            if (isValidation) {
              setIsValidation(false);
            }
            validation.setFieldValue("email", e.target.value);
          }}
          id="email"
          name="email"
          required
        />
        <label htmlFor="email">Email</label>
      </div>
      <div>
        <input
          type="password"
          id="password"
          value={validation.values.password}
          onChange={(e) => {
            if (isValidation) {
              setIsValidation(false);
            }
            validation.setFieldValue("password", e.target.value);
          }}
          autoComplete="new-password"
          name="password"
          required
        />
        <label htmlFor="password">Password</label>
      </div> */}
      <button type="submit" >
        Login
      </button>
      <h5>
        Don't have an account?
        <button onClick={() => setDisplayLogin(false)}>Register</button>
      </h5>
    </form>
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
        <div className="form-error">
          {/* {!isEmpty(validation.errors) &&
            isValidation &&
            Object.entries(validation.errors).map((item) => (
              <p key={item[0]}>{item[1]}</p>
            ))}
        </div>
        <div>
          <input
            type="text"
            id="email"
            name="email"
            value={validation.values.email}
            autoComplete="off"
            onChange={(e) => {
              if (isValidation) {
                setIsValidation(false);
              }
              validation.setFieldValue("email", e.target.value);
            }}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            value={validation.values.name}
            autoComplete="off"
            onChange={(e) => {
              if (isValidation) {
                setIsValidation(false);
              }
              validation.setFieldValue("name", e.target.value);
            }}
            required
          />
          <label htmlFor="username">User name</label>
        </div>
        <div>
          <input
            type="password"
            id="password"
            value={validation.values.password}
            autoComplete="off"
            onChange={(e) => {
              if (isValidation) {
                setIsValidation(false);
              }
              validation.setFieldValue("password", e.target.value);
            }}
            name="password"
            required
          />
          <label htmlFor="password">Password</label> */}
        </div>
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
