import React from "react";
// const videosrc = require("../../app/video.mp4");
export function SparklesPreview() {

  return (
    <div className="h-[15rem] md:h-[35rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0">
        <video src="./public/video.mp4" autoPlay loop controls>
        </video>
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Scam Site
      </h1>
    </div>
  );
}
