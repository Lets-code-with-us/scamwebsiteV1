import React from "react";

let src = "https://res.cloudinary.com/dfqrdloq7/video/upload/v1710955173/etocyoandurnti9wgozg.mp4";

export function SparklesPreview() {
  return (
    <div className="h-[20rem] sm:h-[30rem] md:h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full h-full absolute inset-0">
        <video
          className="object-cover w-full h-full video-player  blur-sm"
          src={src}
          autoPlay
          muted
          loop
        ></video>
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Scam Alert
      </h1>
    </div>
  );
}
