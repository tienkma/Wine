import React, { memo } from "react";
import { Link } from "react-router-dom";
import video from "../assets/home/video.mp4"

const Video = () => {
  return (
    <div id="video" >
      <video width="100%" height="100%" loop autoPlay muted>
        <source
          type="video/mp4"
          src={video}
        ></source>
      </video>
      <div className="video_title">
        <h1>T-WINE</h1>
        <h4>Let's experience the bottle of wine with us</h4>
        <Link to="/products" className="btn">
          List Products
        </Link>
      </div>
    </div>
  );
};

export default memo(Video);
