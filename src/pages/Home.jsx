import React from "react";
import Navbar from "../components/Navbar";
import RotatingImages from "../components/RotatingImages";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="w-full relative">
      <Navbar />

      <div className="w-full md:h-[600px] h-[650px] lg:h-[700px] pt-[86px] bg-[#1C6360] overflow-hidden">
        <div className="w-[90%] m-auto h-[100%] flex md:flex-row lg:flex-row flex-col ">
          <div className="lg:h-[100%] md:h-[100%] h-[50%] lg:w-[50%] md:w-[50%] flex flex-col justify-center  ">
            <div className="text-white teko font-[500] ">
              <p className="text-[60px] lg:text-[96px] md:text-[60px] md:leading-[91.71px] text-center md:text-start lg:leading-[137.57px]">
                No Drama, Only
              </p>
              <p className="text-[90px] leading-[90px] md:text-[90px] lg:text-[125px] text-center md:text-start lg:leading-[100.13px] md:leading-[90.57px]">
                Currynama!
              </p>
            </div>
            <div className="w-full flex md:justify-start lg:justify-start justify-center">
              <button className="montserrat mt-[30px] btn-shadow font-[600px] text-[18px] w-[150px] h-[50px] px-[8x] py-[3px] lg:text-[26px] lg:w-[200px] lg:h-[55px] lg:px-[13px] lg:py-[7px] md:text-[26px] md:w-[200px] md:h-[55px] md:px-[13px] md:py-[7px] rounded-[11px] bg-[#DA3D12] text-white  ">
                Order Now
              </button>
            </div>
          </div>
          <div className="md:w-[50%] lg:w-[50%] h-[50%]   md:flex lg:flex justify-end items-end ">
            <RotatingImages />
          </div>
        </div>
        <div className="absolute top-[625px] z-[20] w-[236px] text-[12px] leading-[14px] h-[50px] rounded-[10px] md:w-[727px] md:h-[69px] md:top-[570px] lg:top-[640px] left-[50%] translate-x-[-50%]  text-white text-center lg:h-[124px] bg-[#DA3D12] shadow md:rounded-[20px] lg:rounded-[20px] md:text-[32px] md:leading-[39px] lg:w-[950px] lg:text-[48px] lg:leading-[58.55px] font-[400] font-impact flex justify-center items-center">
          <p>Free Delivery and 15% off on direct orders</p>
        </div>
      </div>
 
      <div className=" w-[87%] flex flex-row justify-between items-baseline mx-auto mb-[50px] md:mb-[90px] mt-[50px] lg:mt-[150px] md:mt-[90px] ">
          <div className="text-[24px] lg:text-[48px] leading-[34px] md:text-[36px] text-[#DA3D12] teko font-[500]">Best dishes for you</div>
        <div>
          <div className="flex justify-center items-center lg:text-[16px] md:text-[12px] text-[7px] font-[600] montserrat">
            <p className="hover:underline transition-all ease-out duration-300">See all dishes</p>
            <span>
              <img className="w-[7px]" src="/HomePage/arrow.svg" alt="arrow" />
            </span>
          </div>
        </div>
      </div>
        <div className="w-[87%] md:hidden lg:hidden mx-auto grid grid-cols-3 gap-4">
          <Card/>           
          <Card/>           
          <Card/>           
        </div>
        <div className="md:w-[87%]  hidden md:grid mx-auto lg:grid grid-cols-4 gap-4">
          <Card/>           
          <Card/>           
          <Card/>           
          <Card/>           
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
  );
};

export default Home;
