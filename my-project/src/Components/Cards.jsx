import React from "react";
import Card from "./Card";
import data from "./data";

const Cards = () => {
  return (
    <div className="flex items-center justify-center mt-20 gap-20 bg-white p-20">
      {data.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          para={item.para}
          image={item.img}
        />
      ))}
    </div>
  );
};

export default Cards;
