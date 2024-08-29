import React from "react";
import Navbar from "../components/Navbar";
import RotatingImages from "../components/RotatingImages";
import Card from "../components/Card";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import PiledCards from "../components/PiledCards";
import Banner from "../components/Banner";
import Rating from "../components/Rating";
import Ratingcard from "../components/Ratingcard";
import Questions from "../components/Questions";
import Footer from "../components/Footer";

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
              <button className="montserrat mt-[30px] btn-shadow font-[600px] text-[20px] w-[150px] h-[50px] px-[8x] py-[3px] lg:text-[26px] lg:w-[200px] lg:h-[55px] lg:px-[13px] lg:py-[7px] md:text-[26px] md:w-[200px] md:h-[55px] md:px-[13px] md:py-[7px] rounded-[11px] bg-[#DA3D12] text-white  ">
                Order Now
              </button>
            </div>
          </div>
          <div className="md:w-[50%] lg:w-[50%] h-[50%] lg:pt-10   md:flex lg:flex justify-end items-end ">
            <RotatingImages />
          </div>
        </div>
        <div className="absolute top-[625px] z-[20] w-[236px] text-[12px] leading-[14px] h-[50px] rounded-[10px] md:w-[727px] md:h-[69px] md:top-[570px] lg:top-[640px] left-[50%] translate-x-[-50%]  text-white text-center lg:h-[124px] bg-[#DA3D12] shadow md:rounded-[20px] lg:rounded-[20px] md:text-[32px] md:leading-[39px] lg:w-[950px] lg:text-[48px] lg:leading-[58.55px] font-[400] font-impact flex justify-center items-center">
          <p>Free Delivery and 15% off on direct orders</p>
        </div>
      </div>

      <div className=" w-[87%] flex flex-row justify-between items-center mx-auto mb-[50px] md:mb-[90px] mt-[50px] lg:mt-[150px] md:mt-[90px] ">
        <div className="text-[24px] lg:text-[48px] leading-[34px] md:text-[36px] text-[#DA3D12] teko font-[500]">
          Best dishes for you
        </div>
        <div className="cursor-pointer">
          <div className="flex  justify-center items-center lg:text-[16px] md:text-[12px] text-[7px] font-[600] montserrat">
            <p className="hover:underline transition-all ease-out duration-300">
              See all dishes
            </p>
            <span>
              <img
                className="w-[7px] md:w-[15px] lg:w-[15px] "
                src="/HomePage/arrow.svg"
                alt="arrow"
              />
            </span>
          </div>
        </div>
      </div>
{/* Mobile View: Horizontal Scroll */}
<div className="w-full p-8 md:hidden mb-[40px] mx-auto overflow-x-auto flex gap-x-4 overflow-visible">
  <div className="flex-none">
    <Card img={"/HomePage/butterChicken.jpeg"} name={"Butter Chicken"} />
  </div>
  <div className="flex-none">
    <Card img={"/HomePage/dal.jpg"} name={"Dal Makhani"} />
  </div>
  <div className="flex-none">
    <Card img={"/HomePage/paneer.jpg"} name={"Paneer Tikka"} />
  </div>
  <div className="flex-none">
    <Card img={"/HomePage/pav.jpg"} name={"Pav Bhaji"} />
  </div>
</div>
      <div className="hidden md:grid md:w-[87%] mb-[40px] mx-auto lg:grid grid-cols-4 gap-4 overflow-visible">
  <Card img={"/HomePage/butterChicken.jpeg"} name={"Butter Chicken"} />
  <Card img={"/HomePage/dal.jpg"} name={"Dal Makhani"} />
  <Card img={"/HomePage/paneer.jpg"} name={"Paneer Tikka"} />
  <Card img={"/HomePage/pav.jpg"} name={"Pav Bhaji"} />
</div>
      <div className="w-full flex">
        <div className="w-[47%] relative md:h-[362px] lg:h-[632px]  h-[265px]  bg-[#1C6360]  ">
          <div className="w-full absolute h-full  bg-hero-pattern bgTransparent "></div>
          <PiledCards />
        </div>
        <div className="w-[53%] h-[265px] md:h-[362px]  lg:h-[632px]  bg-[#B41C55] flex flex-col gap-4 pl-4 md:pr-10 pr-6 lg:p r-[100px] lg:pl-[50px] justify-center">
          <div className="teko font-[700] text-[15px] leading-[21.5px] md:text-[32px] md:leading-[45.86px] text-white lg:text-[48px] lg:leading-[68.78px] ">
            BHOOK TO THA EK BAHANA,
            <br /> KHANA THA <span className="text-[#FAB700]">CURRYNAMA</span>
          </div>
          <div className="montserrat flex flex-col gap-2 font-[500] text-[7px] leading-[8.53px] md:text-[12px] md:leading-[14.63px] lg:text-[17px] lg:leading-[24.32px] text-white">
            <div>
              Coming from the house of Seven Seas with more than 25 years of
              legacy, Currynama promises to serve nothing but the best Indian
              food to the people of Delhi NCR.
            </div>
            <div>
              Currynama brings you the food that reminds you of your past,
              awakens your senses in the present and represents the future of
              regional and modern Indian Cuisine. <br />
              With the addition of premium quality ingredients, eco-friendly
              packaging and hygienic kitchen, Currynama aims to deliver an
              outstanding at home dining experience.
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-[87%] m-auto py-[50px] md:py-[75px] lg:py-[100px]">
          <Banner />
        </div>
      </div>

      <div className="w-full bg-[#FFFBF2] pb-10 block md:hidden lg:hidden">
        <div className="w-[87%]  m-auto pt-4">
          <div className="text-[#DA3D12] teko font-[500] text-[24px] leading-[34.39px]">
            What Our Customers Says
          </div>
          <div className="font-[500] mb-4 text-[#1C6360]/[60%] montserrat text-[8px] leading-[9.75px]">
            We've gathered a collection of reviews from delighted customers who
            have experienced the magic of Currynama's offerings.
          </div>
          <Rating />
          <div className="">
            <Ratingcard />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FFFBF2] pt-10 pb-10 hidden md:block lg:block">
        <div className="w-[87%]  m-auto pt-4 flex ">
        <div className="w-[50%]">
          <div className="text-[#DA3D12] teko font-[500] text-[33px] leading-[34.39px] md:text-[40px] md:leading-[57.39px]  ">
            What Our Customers Says
          </div>
          <div className=" md:hidden lg:block hidden font-[500] mb-4 text-[#1C6360]/[60%] montserrat text-[12px] leading-[9.75px] md:text-[14px] md:leading-[17.07px]">
            We've gathered a collection of reviews from delighted <br/> customers who
            have experienced the magic of <br/> Currynama's offerings.
          </div>
          <div className=" md:block lg:hidden hidden font-[500] mb-4 text-[#1C6360]/[60%] montserrat text-[8px] leading-[9.75px] md:text-[14px] md:leading-[17.07px]">
            We've gathered a collection of<br/> reviews from delighted customers<br/> who
            have experienced the magic of <br/> Currynama's offerings.
          </div>

        </div>
        <div className="w-[50%]">
          <Rating />
        </div>
        </div>
        <div>
          <div className="lg:w-[87%] md:w-[87%] pb-20 m-auto md:pt-8 lg:pt-20 flex justify-between  ">
            <Ratingcard />
          </div>
        </div>
      </div>

      <div className="w-full mb-10 h-[165px] md:h-[251px] lg:h-[429px] bg-[#B41C55] ">
      <div className="w-full absolute h-[165px] md:h-[251px] lg:h-[429px]   bg-hero-pattern  bgTransparent "></div>
      <div className="w-[87%] m-auto relative">
        <div className="w-[60%] flex flex-col justify-center gap-1 h-[165px] md:h-[251px] lg:h-[429px]">
          <div className="teko text-[15px] leading-[21.5px] md:text-[32px] md:leading-[45.86px]  lg:text-[48px] lg:leading-[68.7px] font-[700] text-white ">
          Premium Flavors Delivered
          </div>
          <div className="montserrat text-white font-[500] text-[7px] leading-[8.53px] md:text-[12px] md:leading-[14.63px]  lg:text-[20px] lg:leading-[24.3px]">
          Currynama by Seven Seas Hotel offers a premium delivery experience right at your doorstep. This cloud kitchen is renowned for its authentic, gourmet dishes prepared by top-tier chefs, ensuring the highest quality in every bite. <br/>
          Each meal is crafted with fresh, locally sourced ingredients, delivering the luxury and taste synonymous with the Seven Seas Hotel. With a focus on excellence, Currynama promises to elevate your culinary journey with unparalleled flavours and exceptional service.
          </div>
        </div>
        <div>
  <img  
    src="/HomePage/premium.jpg" 
    alt="group" 
    className="absolute top-[-18px] md:top-[-13px] lg:top-[-20px] right-0 w-[124px] h-[200px] md:w-[199px] md:h-[290px] md:rounded-[25px] lg:w-[343px] lg:h-[475px] lg:rounded-[25px] object-cover" 
  />
</div>

      </div>


      </div>

      <div className="w-[87%] m-auto">
        <Questions/>
      </div>

      <Footer/>
    </div>
  );
};

export default Home;
