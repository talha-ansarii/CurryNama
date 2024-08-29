import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" h-auto w-full bg-[#1C6360]">
      <div className="w-full flex justify-center items-center">
        <img
          src="/logo.png"
          alt="logo"
          className="w-[149px] h-[149px] block md:hidden lg:hidden"
        />
      </div>

      <div className="w-[87%]   m-auto h-[1px] bg-white md:hidden lg:hidden block"></div>

      <div className="w-[87%] pb-2 m-auto pt-10  grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 ">
        <div className="flex flex-col md:gap-y-3 lg:gap-y-2 col-span-2 md:col-span-1 lg:col-span-1 ">
          <div className="montserrat font-[600] lg:text-[18px] text-[14px]  lg:leading-[26px] md:text-[15px] text-white mb-4">
            Contact us
          </div>
          <div className="flex justify-start items-center  ">
            <img
              src="/HomePage/phone.svg"
              alt="phone"
              className="w-[20px] h-[20px] lg:w-[24px] lg:h-[27px] md:w-[21px] md:h-[27px]  mt-2"
            />
            <div className="montserrat font-[500] lg:text-[12px] text-[11px] md:text-[10px] leading-[18px] text-white">
              Gurugram : <span className="font-[400]">+91 8800994067</span>{" "}
            </div>
          </div>
          <div className="flex justify-start items-center ">
            <img
              src="/HomePage/phone.svg"
              alt="phone"
              className="lg:w-[24px] lg:h-[27px] md:w-[21px] md:h-[27px]  mt-2"
            />

            <div className="montserrat font-[500] text-[11px] lg:text-[12px] md:text-[10px] leading-[18px] text-white">
              Greater Kailash :{" "}
              <span className="font-[400]">+91 8800994064</span>{" "}
            </div>
          </div>
          <div className="flex justify-start items-center">
            <img
              src="/HomePage/phone.svg"
              alt="phone"
              className="lg:w-[24px] lg:h-[27px] md:w-[21px] md:h-[27px]  mt-2"
            />

            <div className="montserrat font-[500] text-[11px] lg:text-[12px] md:text-[10px] leading-[18px] text-white">
              Rohini : <span className="font-[400]">+91 8800994060/6</span>{" "}
            </div>
          </div>
          <div className="flex justify-start items-center ">
            <img
              src="/HomePage/phone.svg"
              alt="phone"
              className="lg:w-[24px] lg:h-[27px] md:w-[21px] md:h-[27px]  mt-2"
            />

            <div className="montserrat font-[500] text-[11px] lg:text-[12px] md:text-[10px] leading-[18px] text-white">
              Lawrence Road : <span className="font-[400]">+91 8800994063</span>{" "}
            </div>
          </div>
          <div className="flex justify-start items-center">
            <img
              src="/HomePage/phone.svg"
              alt="phone"
              className="lg:w-[24px] lg:h-[27px] md:w-[21px] md:h-[27px]  mt-2"
            />

            <div className="montserrat font-[500] text-[11px] lg:text-[12px] md:text-[10px] leading-[18px] text-white">
              Preet Vihar : <span className="font-[400]">+91-880099406</span>{" "}
            </div>
          </div>
          <div className="flex justify-start items-center ">
            {" "}
            <img
              src="/HomePage/phone.svg"
              alt="phone"
              className="lg:w-[24px] lg:h-[27px] md:w-[21px] md:h-[27px]  mt-2"
            />
            <div className="montserrat font-[500] text-[11px] lg:text-[12px] md:text-[10px] leading-[18px] text-white">
              Noida : <span className="font-[400]">+91-8800994068</span>{" "}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4  lg:items-center md:items-center pb-6">
          <div className=" flex flex-col gap-[24.2px]">
            <div className="montserrat font-[600] text-[14px] lg:text-[18px] lg:leading-[26px] md:text-[15px] text-white mb-[10px]">
              Company
            </div>
            <div className="flex justify-start items-center text-[11px] gap-x-6">
              <Link
                to="/"
                className="montserrat font-[500] lg:text-[15px] md:text-[10px] leading-[18px] text-white"
              >
                Home
              </Link>
            </div>
            <div className="flex justify-start items-center text-[11px] gap-x-6">
              <Link
                href="/"
                className="montserrat font-[500] lg:text-[15px] md:text-[10px] leading-[18px] text-white"
              >
                Menu
              </Link>
            </div>
            <div className="flex justify-start items-center text-[11px] gap-x-6">
              <Link
                to="/blogs"
                className="montserrat font-[500] lg:text-[15px] md:text-[10px] leading-[18px] text-white"
              >
                Blogs
              </Link>
            </div>
            <div className="flex justify-start items-center text-[11px] gap-x-6">
              <Link
                to="/faq"
                className="montserrat font-[500] lg:text-[15px] md:text-[10px] leading-[18px] text-white"
              >
                FAQs
              </Link>
            </div>
            <div className="flex justify-start items-center text-[11px] gap-x-6">
              <Link
                to="/ourstory"
                className="montserrat font-[500] lg:text-[15px] md:text-[10px] leading-[18px] text-white"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="montserrat font-[600] text-[14px] lg:text-[18px] md:text-[15px] lg:leading-[26px] text-white mb-3">
            Legal
          </div>
          <div className="flex justify-start text-[11px] items-center gap-x-6">
            <Link
              to="/privacypolicy"
              className="montserrat font-[500] lg:text-[15px] md:text-[10px] leading-[18px] text-white"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex justify-start text-[11px] items-center gap-x-6">
            <Link
              to="/privacypolicy"
              className="montserrat font-[500] lg:text-[15px] md:text-[10px] leading-[18px] text-white"
            >
              Terms & Services
            </Link>
          </div>
         
        </div>
        <div className="flex flex-col gap-[21.6px]">
          <div className="montserrat font-[600] text-[14px] lg:text-[18px] lg:leading-[26px] md:text-[15px] text-white mb-3">
            Connect us at
          </div>
          <a href="/" className="flex justify-start items-center gap-x-2">
            <img
              src="/HomePage/fb.svg"
              alt="phone"
              className="lg:w-[21px] lg:h-[21px] w-[16px] h-[16px] md:w-[13px] md:h-[13px]"
            />
            <div className="montserrat font-[500] lg:text-[15px] md:text-[10px] text-[11px] leading-[18px] text-white">
              Facebook
            </div>
          </a>
          <a href="/" className="flex justify-start items-center gap-x-2">
            <img
              src="/HomePage/ig.svg"
              alt="phone"
              className="lg:w-[21px] lg:h-[21px] w-[16px] h-[16px] md:w-[13px] md:h-[13px] "
            />
            <div className="montserrat font-[500] lg:text-[15px] md:text-[10px] text-[11px] leading-[18px] text-white">
              Instagram
            </div>
          </a>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="montserrat font-[600] lg:text-[18px] text-[14px] md:text-[15px] lg:leading-[26px] text-white mb-3">
            Opening Times
          </div>
          <div className="flex justify-start items-center md:gap-x-14 lg:gap-x-14 gap-x-3">
            <div className="montserrat font-[500] lg:text-[15px] text-[11px] md:text-[10px] leading-[18px] text-white">
              Mon-Fri
            </div>
            <div className="montserrat font-[500] lg:text-[15px] text-[11px] md:text-[10px] leading-[18px] text-white">
              12:00 AM - 11:00 PM
            </div>
          </div>
          <div className="flex justify-start items-center md:gap-x-14 lg:gap-x-14 gap-x-3">
            <div className="montserrat font-[500] lg:text-[15px] text-[11px] md:text-[10px] leading-[18px] text-white">
              Sat-Sun
            </div>
            <div className="montserrat font-[500] lg:text-[15px] text-[11px] md:text-[10px] leading-[18px] text-white">
              12:00 AM - 11:00 PM
            </div>
          </div>

          <img
            src="/logo.png"
            alt="logo"
            className="w-[149px] h-[149px] ml-[30px] hidden md:block lg:block"
          />
        </div>
      </div>
      <div className="w-full bg-[#FAB700]">
        <div className="w-[87%] flex justify-between m-auto text-[#DA3D12] py-1 font-[400] text-[9px]">
          <div>Terms and Conditions & Privacy Policy</div>
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
