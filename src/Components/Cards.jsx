import React from "react";
import Month from "../Assets/month.svg";
import Year from "../Assets/year.svg";
import Lifetime from "../Assets/lifetime.svg";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Month}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Monthly Subscription
          </h2>
          <p className="text-center text-4xl font-bold">₱250</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Free Consultation</p>
            <p className="py-2 border-b mx-8 ">500 GB Storage</p>
            <p className="py-2 border-b mx-8 ">1 Premium User</p>
            <p className="py-2 border-b mx-8 line-through">Fast Network</p>
            <p className="py-2 border-b mx-8 line-through">24/7 Support</p>
            <p className="py-2 border-b mx-8 line-through">24/7 Consultation</p>
          </div>
          <button className="bg-[#39ccb8] w-[200px] rounded-md font-semibold my-6 mx-auto py-3 text-[#0F0F0F]">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl hover:shadow-[#39ccb8] flex flex-col bg-gray-50 p-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent"
            src={Lifetime}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Lifetime Subscription
          </h2>
          <p className="text-center text-4xl font-bold">₱5,000</p>
          <div className="text-center text-[#008170] font-semibold">
            <p className="py-2 border-b mx-8 mt-8">Free Consultation</p>
            <p className="py-2 border-b mx-8 ">5000 GB Storage</p>
            <p className="py-2 border-b mx-8 ">10 Premium User</p>
            <p className="py-2 border-b mx-8 ">Ultra Fast Network</p>
            <p className="py-2 border-b mx-8 ">24/7 Support</p>
            <p className="py-2 border-b mx-8 ">24/7 Consultation</p>
          </div>
          <button className="bg-[#0F0F0F] w-[200px] rounded-md font-semibold my-6 mx-auto py-3 text-[#39ccb8]">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Year}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Yearly Subscription
          </h2>
          <p className="text-center text-4xl font-bold">₱1,000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 ">Free Consultation</p>
            <p className="py-2 border-b mx-8 ">1000 GB Storage</p>
            <p className="py-2 border-b mx-8 ">2 Premium User</p>
            <p className="py-2 border-b mx-8 ">Fast Network</p>
            <p className="py-2 border-b mx-8 line-through">24/7 Support</p>
            <p className="py-2 border-b mx-8 line-through">24/7 Consultation</p>
          </div>
          <button className="bg-[#39ccb8] w-[200px] rounded-md font-semibold my-6 mx-auto py-3 text-[#0F0F0F]">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
