import React, { memo } from "react";
import { Link } from "react-router-dom";
import video from "../../../assets/home/video.mp4"

const Video = () => {
  return (
    <div id="video" className="relative" style={{height: "calc(100vh - 90px)"}} >
      <video width="100%" height="100%" className="object-cover h-full" loop autoPlay muted>
        <source
          type="video/mp4"
          src={video}
        ></source>
      </video>
      <div className="video_title absolute top-1/2 -translate-y-1/2" style={{left: '10%'}}>
        <h1 className="text-8xl text-color">T-WINE</h1>
        <h4 className="text-white text-4xl mt-5 mb-10">Let's experience the bottle of wine with us</h4>
        <Link to="/products" className="bg-background text-white px-2.5 py-4 rounded-md hover:bg-color transition-colors capitalize">
          List Products
        </Link>
      </div>
    </div>
  );
};

export default memo(Video);
