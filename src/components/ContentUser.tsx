import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { getLocal, setLocal, UseUserContext } from "../context/UserContext";
import { users } from "../types/userType";
import * as Yup from "yup";
import { URL_REQUEST } from "../utils/URL";
import { Requests } from "../utils/request";
import { Toasts } from "../utils/notification";
import { isEmpty, omit } from "lodash";
import LoaddingPage from "./LoaddingPage";

const ContentUser = () => {
  const user = getLocal("users");
  const [valueUser, setValueUser] = useState<users>({});
  const [isValidation, setIsValidation] = useState(false);
  const [loadding, setLoadding] = useState(true);

  useEffect(() => {
    getValueUser();
  }, [JSON.stringify(user)]);

  const getValueUser = async () => {
    setLoadding(true);
    const userValue = await Requests.get(
      `${URL_REQUEST}/api/v1/user/${user.id || user._id}`
    );
    setLoadding(false);
    if (userValue?.error) {
      Toasts.error(userValue.error);
      return;
    }
    userValue.user = omit(userValue.user, ["password"]);
    setValueUser(userValue.user);
  };
  // Tien
  const validation = useFormik({
    initialValues: valueUser,
    enableReinitialize: true,
    validateOnBlur: false,
    validationSchema: Yup.object({
      email: Yup.string().required("Please enter the value Email").email(),
      name: Yup.string().required("Please enter the value Name"),
    }),
    onSubmit: (value) => handleSubmit(value),
  });
  const handleSubmit = async (value: any = {}) => {
    setLoadding(true);

    const data = await Requests.put(
      `${URL_REQUEST}/api/v1/user/${user.id || user._id}`,
      value,
      {
        id: user.id || user._id,
      }
    );
    setLoadding(false);
    if (data?.error) {
      Toasts.error(data.error);
      return;
    }

    setLocal("users", data.user);
    Toasts.success("Update User Success!");
  };

  if (loadding) {
    return <LoaddingPage />;
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1>My Information</h1>
      <hr />
      {!isEmpty(validation.errors) && isValidation && (
        <div
          style={{
            background: "#fde1e1",
            borderRadius: "10px",
            padding: "10px",
          }}
          className="inputLine mb-0"
        >
          <ul className="lineRight">
            {Object.entries(validation.errors).map((item) => (
              <li
                key={item[0]}
                style={{
                  fontSize: "15px",
                  listStyle: "disc",
                  marginLeft: "20px",
                }}
              >
                {item[1]}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="form-error"></div>
      <div className="form_content">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={validation.values.email}
          onChange={(e) => validation.setFieldValue("email", e.target.value)}
        />
      </div>
      <div className="form_content">
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          value={validation.values.name}
          onChange={(e) => validation.setFieldValue("name", e.target.value)}
        />
      </div>
      <div className="form_content">
        <label htmlFor="numberPhone">Phone number</label>
        <input
          type="number"
          id="numberPhone"
          value={validation.values.numberPhone}
          onChange={(e) =>
            validation.setFieldValue("numberPhone", e.target.value + "")
          }
        />
      </div>
      <div className="form_content">
        <label htmlFor="address">address</label>
        <input
          type="text"
          id="address"
          value={validation.values.address}
          onChange={(e) => validation.setFieldValue("address", e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn"
        onClick={() => {
          validation.submitForm();
          if (!isValidation && !isEmpty(validation.errors)) {
            setIsValidation(true);
          }
        }}
      >
        Save
      </button>
    </form>
  );
};

export default ContentUser;
