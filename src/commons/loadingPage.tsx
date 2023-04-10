import React from "react";
import loadding from "../images/loading/Loadding3.gif";
import loadding2 from "../images/loading/loadding2.png";
import "../css/loadding.css";
const Loadding = () => {
  return (
    <section id="loadding">
      <div>
        <img src={loadding} alt="" />
        <img src={loadding2} alt="" />
      </div>
      <h3>Loading...</h3>
    </section>
  );
};

export default Loadding;
