import React from "react";

const vid = () => {
  return (
    <div className="flex justify-center p-20">
      <video
        className="rounded-xl "
        src="https://cdn.pixabay.com/vimeo/413256539/cat-37131.mp4?width=640&hash=be7d94e0542afd675412e13cb1ccfec1f804a3f0"
        autoPlay
      ></video>
    </div>
  );
};

export default vid;
