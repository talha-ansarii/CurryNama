import React from "react";
import Navbar from "../components/Navbar";
import RotatingImages from "../components/RotatingImages";

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />

      
      <div className="w-full md:h-[700px] h-[650px] lg:h-[650px] pt-[86px] bg-[#1C6360] overflow-x-hidden">
        <div className="w-[90%] m-auto h-[100%] flex  ">
        <div className="h-[100%] lg:w-[50%] md:w-[50%] flex flex-col justify-center  ">
            <div className="text-white teko font-[500] ">
              <p className="text-[60px] lg:text-[96px] md:text-[60px] md:leading-[91.71px] lg:leading-[137.57px]">No Drama, Only</p>
              <p className="text-[90px] leading-[90px] md:text-[90px] lg:text-[125px] lg:leading-[100.13px] md:leading-[90.57px]">Currynama!</p>
            </div>

            <button className="montserrat mt-[30px] btn-shadow font-[600px] text-[18px] w-[150px] h-[50px] px-[8x] py-[3px] lg:text-[26px] lg:w-[200px] lg:h-[55px] lg:px-[13px] lg:py-[7px] md:text-[26px] md:w-[200px] md:h-[55px] md:px-[13px] md:py-[7px] rounded-[11px] bg-[#DA3D12] text-white  ">
            Order Now 
            </button>

        </div>
        <div className="w-[50%] hidden  md:flex lg:flex justify-end ">

        <RotatingImages/>
        </div>

        </div>
      </div>

    </div>
  );
};

export default Home;
