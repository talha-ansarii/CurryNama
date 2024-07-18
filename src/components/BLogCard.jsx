import React from 'react';

const BlogCard = () => {
  
  return (
    <div className="max-w-sm rounded-lg overflow-hidden cursor-pointer px-4 lg:mb-7 md:mb-0 mb-0">
            <div className=''>

      <img className="w-[236px] md:w-[218px] lg:w-[322px]  h-[144px] md:h-[153px] lg:h-[226px] rounded-[21px] object-cover" src="/HomePage/paneer.jpeg" alt="Burger" />
            </div>
      <div className="pt-4">
        <h2 className="text-[12px] leading-[14px] md:text-[20px] md:leading-[24px] lg:text-[20px] lg:leading-[24px] font-[600] text-[#1C6360] montserrat"><p >TITLE HAI</p> </h2>
        <div className="flex items-center justify-between pt-2">
          <div className="flex text-[10px] leading-[12px] md:text-[13px] md:leading-[15px] lg:text-[20px] lg:leading-[24px]   gap-2 items-center text-[#1C6360] montserrat font-[500]">
          <img className='w-[24px] h-[24px] md:w-[54px] md:h-[54px] lg:w-[54px] lg:h-[54px]' src="/colorLogo.png"/>

          July 3, 2024
          </div>
        </div>
        <div
            className="flex gap-2 lg:mb-0 mb-10 w-full items-center hover:underline cursor-pointer mt-2"
          >
            <div className="montserrat font-[500] text-[10px] leading-[12px] md:text-[13px] md:leading-[15px] lg:text-[20px] lg:leading-[24px] text-[#DA3D12]">
              Read More
            </div>
            <img src="/orangeArrow.svg" alt="faq" className="lg:w-[16px] md:w-[16px] w-[9px]" />
          </div>
      </div>
    </div>
  );
}

export default BlogCard;
