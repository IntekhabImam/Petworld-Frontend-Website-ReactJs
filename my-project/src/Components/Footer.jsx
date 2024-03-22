import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col  p-[4rem] gap-10 w-1/2">
        <h1 className="font-extrabold ">PETWORLD</h1>
        <h3 className=" text-base relative top-7">
          Update right to your inbox
        </h3>

        <div className="flex justify-between gap-6">
          <input
            className="p-2 border-2 border-inherit w-[300px] rounded-md text-black "
            type="text "
            placeholder="Email Address"
          />
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded-md font-normal mr-60">
            Send
          </button>
        </div>

        <div className="flex gap-10 font-semibold text-base ">
          <h3>&copy;PETWORLD 2024</h3>
          <h3>Privacy policy</h3>
          <h3>Terms of use</h3>
        </div>
      </div>

      <div className="flex flex-col w-1/2 p-20">
        <div className="flex gap-20 p-20 w-full relative bottom-20">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-base">Our story</h3>
            <h3>FAQ</h3>
            <h3>Contact</h3>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-base">Pet care</h3>
            <h3>Treatment</h3>
            <h3>Health</h3>
            <h3>Hygine</h3>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-base">Shop</h3>
            <h3>Pet Food</h3>
            <h3>Toys</h3>
            <h3>Accessories</h3>
          </div>
        </div>

        <div className="flex gap-5 justify-end relative bottom-20 right-[135px]">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <WhatsAppIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
