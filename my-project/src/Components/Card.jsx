import React from "react";

const Card = ({ image, title, para }) => {
  return (
    <div className="w-[15%]  rounded-lg ">
      <img className="w-full rounded-lg" src={image} alt="" />
      <h3 className="font-semibold mt-2">{title}</h3>
      <p className="text-[#929195] mt-4 text-lg">{para}</p>
    </div>
  );
};

export default Card;
