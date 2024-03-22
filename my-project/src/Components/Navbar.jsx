import React from "react";

const Navbar = () => {
  return (
    <div className=" w-full flex items-center justify-between p-5 bg-white px-12">
      <div>
        <h1 className="font-extrabold ">PETWORLD</h1>
      </div>

      <div className=" flex gap-4 ">
        <button className="font-base">Sign Up</button>
        <button className="px-7 py-2 bg-blue-600 text-white rounded-md font-base hover:bg-blue-800">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
