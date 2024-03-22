import React from "react";

const Hero = () => {
  return (
    <div className="flex w-full">
      <div className="w-1/2 bg-[#F7F5FD] flex flex-col items-start p-20 ">
        <h1 className="font-bold text-6xl leading-tight text-[#2D2D2D]">
          Pet Store <br /> & Beyond
        </h1>
        <p className="text-[#929195] mt-4 text-lg">
          You have within you, right now, everything you need to deal with
          whatever the world can throw at you.
        </p>
        <button className="px-8 py-3 bg-[#F8D57E] rounded-md mt-4 hover:bg-[#c7a95e]">
          Get Started
        </button>
      </div>
      <div className="w-1/2 bg-[#F7F5FD] p-20">
        <img
          className=" w-[70%] h-[60vh] object-cover  overflow fit-cover border-solid rounded-xl"
          src="https://images.unsplash.com/photo-1583336663277-620dc1996580?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
