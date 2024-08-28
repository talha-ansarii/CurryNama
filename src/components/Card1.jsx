import React from "react";

function Card({img,name}) {
  console.log(img)
  return (
    <div className="relative hover:scale-105 transition-all duration-300 w-[90px] md:w-[146px] lg:w-[242px] lg:h-[333px] md:h-[213px] h-[124px] flex items-end md:pb-4 pb-2 justify-center lg:p-6  rounded-[10px] lg:rounded-[20px] card-shadow">
      <div>
        <img
          src={img}
          alt="butter-chicken"
          className="w-[65px] h-[65px] md:w-[113px] md:h-[113px] rounded-full top-[-25px] md:top-[-50px] object-cover left-[50%] translate-x-[-50%] absolute imgShadow lg:w-[187px] lg:h-[187px] lg:top-[-70px] "
        />
      </div>
      <div className="flex flex-col gap-1 lg:gap-5 md:gap-3 justify-end items-center">
        <div className="montserrat font-[600] md:text-[14px] lg:text-[20px] lg:leading-[24px] text-[10px] leading-[12.19px] text-center">
          {name}
        </div>
        <div className="montserrat font-[400] lg:text-[10px] lg:leading-[12.19px] text-[4px] md:text-[8px] md:leading-[9.75px]  text-center ">
        Traditional Punjabi recipe, tender Chicken cooked in rich tomato gravy topped with butter        
        </div>
        <div className="montserrat md:text-[14px] lg:text-[22px] lg:leading-[26px] font-[600] text-[11px] leading-[13.41px] text-center">
          Rs 565.00
        </div>
        <button className="montserrat w-[50px] lg:w-[108px] md:w-[100px] font-[600] md:text-[14px] btn-shadow text-[6px] text-white bg-[#DA3D12] px-[6px] py-[4px] rounded-[11px] text-center">
          Order Now
        </button>
      </div>

      
    </div>
  );
}

export default Card;