import React from "react";
import Wallet from "../Assets/wallet.svg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Wallet} alt="/" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="text-[#39ccb8] font-bold uppercase">
            Price Analytics Dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Price Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            velit quis repellat sed doloremque praesentium suscipit perspiciatis
            aperiam, nulla alias beatae fugit expedita ab cumque consequatur
            ullam illum dolore assumenda.
          </p>
          <button className="bg-[#0F0F0F] w-[200px] rounded-md font-semibold my-6 mx-auto md:mx-0 py-3 text-[#39ccb8]">
          See our prices
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Analytics;
