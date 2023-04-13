import React, { useState } from "react";
import { useHomeContact } from "../context/HomeContext";
import "../css/Verification.css";
import logo from "../images/logo.png";
import { FaTimes } from "react-icons/fa";

const Verification = () => {
  const { setVerification } = useHomeContact();
  const [model, serModle] = useState(false);
  return (
    <main id="verification" >
      <div className="backGround"></div>
      <div className="title">
        <img src={logo} alt="logo" />
        <p>website Only sold to people over 18 years old</p>
        <div className="btn_container">
          <button className="btn" onClick={() => setVerification()}>
            over 18 years
          </button>
          <button className="btn" onClick={() => serModle(true)}>
            under 18
          </button>
        </div>
      </div>
      <div className={`modle ${model ? "modleActive" : null}`}>
        <h1>Sorry!!!</h1>
        <h4>website Only sold to people over 18 years old</h4>
        <button onClick={() => serModle(false)}>
          <FaTimes />
        </button>
      </div>
    </main>
  );
};

export default Verification;
