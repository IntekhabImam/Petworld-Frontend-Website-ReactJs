import React from "react";

const Contact = () => {
  return (
    <div className="flex bg-[#FCFAF5]">
      <div className="flex flex-col p-40 items-start ">
        <h1 className="font-bold text-6xl leading-tight text-[#2D2D2D]">
          Let's talk, <br />
          woof!
        </h1>
        <p className="text-[#929195]  text-lg mt-4">
          {" "}
          You can ask us your question about your pet,
          <br />
          and we will be happy to answer you!
        </p>
        <button className=" px-5 py-3 w-[150px] bg-[#F8D57E] hover:bg-[#c7a95e] rounded-md mt-4">
          Contact Us
        </button>
      </div>
      <div>
        <img
          className="border-10 w-[80%] h-[60vh] object-cover rounded-lg overflow fit-cover mt-20"
          src="https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
