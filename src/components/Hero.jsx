import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/531035/pexels-photo-531035.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="/"
      />
      <div className="bg-black/50 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Private Beaches & Getaways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Let us help you have the best vacation you've ever had. Our private
            beaches will help you have your perfect getaway.
          </p>
          <button className="bg-white text-black">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
