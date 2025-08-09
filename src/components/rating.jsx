import React from "react";
const stars = Array.from({ length: 5 }, (_, i) => i + 1);
const clicked = () => {
  console.log(clicked);
};

const Rating = () => {
  return (
    <div className="rating-container">
      <h2>Rate your experience</h2>
      <div className="stars">
        {stars.map((star) => (
          <span onlcick={clicked} key={star} className="star">
            {"\u2605"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
