import React from "react";
import loadding from "../../assets/loading/Loadding3.gif";
import loadding2 from "../../assets/loading/loadding2.png";

interface LoadingProps {
  className?: string
}

const Loading = (props: LoadingProps) => {
  return (
    <section id="loadding " className={`${props.className || ""}`}>
      <div className="relative w-24 mx-auto " style={{height: 150}}>
        <img src={loadding} alt="" className="absolute -top-1.5" />
        <img src={loadding2} alt="" className="absolute" style={{mixBlendMode: "darken"}}/>
      </div>
      <h3 className="text-center mt-5 text-background font-normal">Loading...</h3>
    </section>
  );
};

export default Loading;
