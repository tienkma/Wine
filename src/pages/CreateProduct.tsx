// import { isEmpty, omit } from "lodash";
// import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import "../css/createPage.css";
// import { Toasts } from "../utils/notification";
// import { Requests } from "../utils/request";
// import { URL_REQUEST } from "../utils/URL";
// import * as Yup from "yup";
// import { getLocal } from "../context/UserContext";
// import { LoaddingPage } from "../components";

const CreateProduct = () => {

  // const validation = useFormik({
  //   initialValues: initState,
  //   enableReinitialize: true,
  //   validateOnBlur: false,
  //   validationSchema: Yup.object({
  //     wine: Yup.string().required("Please enter the value wine"),
  //     winery: Yup.string().required("Please enter the value Winery"),
  //     available: Yup.number()
  //       .required("Please enter the value Available")
  //       .min(0),
  //     price: Yup.number().required("Please enter the value Price").min(0),
  //     image: Yup.string().required("Please enter the value Image"),
  //   }),
  //   onSubmit: (value) => handleSubmit(value),
  // });

  const handleSubmit = async (value: any) => {

    
  };

  // const handleUpload = async (e: any) => {
  //   const imageFile = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("image", imageFile);
  //   setLoadding(true);
  //   try {
  //     const {
  //       image: { src },
  //     } = await Requests.post(`${URL_REQUEST}/api/v1/upload`, formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Authorization: `Bearer ${getLocal("token")}`,
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //     });
  //     validation.setFieldValue("image", src);
  //     setLoadding(false);
  //     validation.setErrors({});
  //   } catch (error) {
  //     setLoadding(false);
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <main id="createPage">
        <section className="content container">
            <div className="inputLine flex">
              <div className="lineLeft">
                {/* {validation.values.image ? (
                  <img src={validation.values.image} alt="Product" />
                ) : (
                  <p>Image Product</p>
                )} */}
              </div>
              <div className="lineRight">
                <p>Image</p>
                <input
                  type="text"
                  onChange={(e) => {
                  }}
                />
                <input
                  type="file"
                  id="image"
                  // onChange={handleUpload}
                  accept="image/*"
                  className="ps-0"
                />
              </div>
            </div>
        </section>
      </main>
    </>
  
  )
}

export default CreateProduct;
