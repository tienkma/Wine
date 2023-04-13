import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Rating: React.FC<{ average: number; reviews: string }> = (props) => {
  const { average, reviews } = props;
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {average > number ? (
          <BsStarFill />
        ) : average > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <div className="rating flex">
      <div className="star">{tempStars.map((item) => item)}</div>
      <p className="reviews">{reviews}</p>
    </div>
  );
};

export default Rating;
