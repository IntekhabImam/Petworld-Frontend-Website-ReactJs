import React from "react";

const About = () => {
  return (
    <div className="flex w-full bg-[#F7F5FD]">
      <div className="w-1/2 flex justify-center items-center py-10">
        <img
          className="w-[400px] h-[400px] object-cover  rounded-[50%]  border-2 border-gray-300	ml-20 "
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-around w-1/2 ">
        <h3 className="font-semibold text-base w-[350px]">
          <span className="font-bold text-3xl">&quot; </span>
          <br />
          We love using 'PETWORLD' products. Environmentally friendly and
          sustainable. We have the sustainable dog bowls and regularly use the
          mint scented poo bags which were all such great value for money.
        </h3>
        <h3 className="relative bottom-[140px] font-semibold text-base opacity-40">
          Intekhab Imam
        </h3>
      </div>
    </div>
  );
};

export default About;
