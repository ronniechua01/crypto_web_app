import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#39ccb8] font-bold p-2">
          Work with the best crypto experts!
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow your finances.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-2">
            Easy, reliable start with
          </p>
          <div className="md:text-5xl sm:text-4xl text-xl font-bold pl-3 text-[#39ccb8]">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: "natural",
                strings: ["Crypto", "Stocks", "Forex"],
                pauseFor: 1000,
              }}
            />
          </div>
        </div>
        <p className="md:text-2xl sm:text-l text-xl font-bold text-gray-500 flex justify-center items-center pt-2 px-2">
          Monitor your data analytics to increase revenue for BTC, ETH, & SOL
        </p>
        <button className="bg-[#39ccb8] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#0F0F0F]">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
