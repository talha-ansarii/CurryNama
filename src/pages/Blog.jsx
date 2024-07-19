import { useParams } from "react-router";
import React, { useEffect, useRef, useState, useTransition } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BLogCard";
import Footer from "../components/Footer";

const Blog = () => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  } ,[scrollY]  
  );

 


  return (
    <div className="bg-[white] ">
      <Navbar />
      <div className="flex flex-col md:flex-col w-full  lg:justify-start  lg:gap-0 lg:flex-row ">
      <div className="md:w-full w-full lg:w-[80%] lg:mt-[86px] relative   ">

      
        <div className="w-[87%] pt-20 md:pt-[120px]  lg:pt-[50px] m-auto pb-9">
          <div className="text-[32px] md:text-[64px] md:leading-[77.6px] flex justify-start pt-[25px]  lg:pt-0 lg:text-[85px] lg:leading-[90px] text-[black] montserrat font-[600]">
            <div className="" />
            TITLE
          </div>
          <div className="text-[#616161] montserrat font-[500] text-[12px] md:text-[13px] lg:text-[15px] md:leading-[20px] leading-[20px] w-full flex justify-start items-center">
            <div className="flex items-center justify-between pt-2">
              <div className="flex text-[10px] leading-[12px] md:text-[13px] md:leading-[15px] lg:text-[20px] lg:leading-[24px]   gap-2 items-center text-[#1C6360] montserrat font-[500]">
                <img
                  className="w-[24px] h-[24px] md:w-[54px] md:h-[54px] lg:w-[54px] lg:h-[54px]"
                  src="/colorLogo.png"
                />
                July 3, 2024
              </div>
            </div>
          </div>

          <div className="flex gap-2 my-6">
          <a href="https://twitter.com/" target="_blank" className="cursor-pointer">
            
            <img
              src="/Blog/twitter.svg"
              alt="twitter"
              className="w-[10px] h-[10px] lg:w-[21px] lg:h-[21px]  "
            />
          </a>
          <a href="https://twitter.com/" target="_blank" className="cursor-pointer">
            
            <img
              src="/Blog/insta.svg"
              alt="twitter"
              className="w-[10px] h-[10px] lg:w-[21px] lg:h-[21px]  "
            />
          </a>
          <a href="https://twitter.com/" target="_blank" className="cursor-pointer">
            
            <img
              src="/Blog/fb.svg"
              alt="twitter"
              className="w-[10px] h-[10px] lg:w-[21px] lg:h-[21px]  "
            />
          </a>
           
          </div>

          <div className="w-full flex justify-center items-center">
            <img
              src="/HomePage/butterChicken.jpeg"
              alt="pic"
              className="w-[326px] md:w-[741px] lg:w-[1092px] h-[204px] lg:h-[573px] md:h-[430px] rounded-[10px] object-cover"
            />
          </div>
        </div>

        <div className="w-[80%] m-auto ">
          <div className="my-6 inter text-[14px] leading-[16.94px]">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
            iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipisci elit, sed eiusmod tempor
            incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
            ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              Quis aute iure reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              Quis aute iure reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              Quis aute iure reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
          </div>
          <div className="w-full flex justify-center items-center">
            <img
              src="/HomePage/butterChicken.jpeg"
              alt="pic"
              className="w-[326px] md:w-[582px] h-[204px] lg:w-[766px] lg:h-[482px] md:h-[343px] rounded-[10px] object-cover"
            />
          </div>
        </div>

        <div className="">
          <div className="w-[326px] md:w-[582px] lg:w-[766px] mx-auto  ">
            <div className="my-6 inter text-[14px] leading-[16.94px]">
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              Quis aute iure reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              Quis aute iure reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              Quis aute iure reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              Quis aute iure reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              Quis aute iure reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </div>
            <div className="flex w-full justify-center items-center">
              <img
                src="/HomePage/butterChicken.jpeg"
                alt="pic"
                className="w-[326px] md:w-[582px] lg:w-[766px]  h-[204px] lg:h-[482px] md:h-[343px] rounded-[10px] object-cover"
              />
            </div>
          </div>

          <div className="w-[326px] md:w-[582px] lg:w-[766px] m-auto">
            <div className="my-6 inter text-[14px] md:mb-0 mb-0 lg:mb-12 leading-[16.94px]">
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              Quis aute iure reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              Quis aute iure reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              Quis aute iure reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              Quis aute iure reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </div>
            
          </div>
        </div>
        </div>
        <div className={`md:hidden lg:flex flex-col    mt-[86px] w-[350px] hidden ${scrollY > 890 ? "sticky top-[86px] h-[1500px] right-[30px] overflow- " : " absolute  top-[890px]  right-[30px] " } `}>
          <div className="montserrat ml-4 pt-4 pb-6 font-[900] lg:text-[32px] lg:leading-[39px] text-[24px] leading-[29px]">
            Latest Posts
          </div>
          <div className=" flex flex-col  gap-4 ">
            <BlogCard />
            
            <BlogCard />
            
            <BlogCard />
            

          </div>
        </div>


        <div className="w-full md:flex lg:hidden flex justify-center items-center flex-col">
          <div className="bg-[#A1A1A1] h-[1px] w-[80%] mt-28"></div>
          <div className="montserrat w-full ml-12 pt-4 pb-6 font-[900] md:text-[28px] md:leading-[34px] text-[24px] leading-[29px]">
            Latest Posts
          </div>
          <div className="grid grid-cols-1  md:grid-cols-3 gap-4 mb-12">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default Blog;
