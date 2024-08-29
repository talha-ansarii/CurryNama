import React from 'react'

import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";


const HomePageFAQ = ({ faq, index, toggleFAQ }) => {
  return (
    
        <div
      className={`faq ${faq.open ? "open" : ""} my-0 p-2 lg:p-4  rounded-lg `}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question montserrat font-[700] text-[#DA3D12] text-[14px] leading-[19.6px] md:text-[16px] md:leading-[21.6px] lg:text-[18px] lg:leading-[21.94px] relative  pr-20 transition-all duration-500 ease-out border-b-[#1C6360] border-b pb-1 lg:pb-3">
        {faq.question}
        <span className=" cursor-pointer absolute right-0 bottom-0 lg:top-[15px] lg:right-[0px] transform -translate-y-1/2 lg:w-[20px] lg:h-[20px] w-[10px] h-[10px] md:w-[17px] md:h-[17px] p-[1px] lg:p-1 transition-all duration-500 ease-out bg-[#1C6360] flex  justify-center items-center  rounded-full text-white md:p-[2px] ">
          {faq.open ? <div><FaPlus className='rotate-[45deg] w-[10px] h-[10px]  md:w-[17px] md:h-[17px]  ' /></div>  : <FaPlus className=' w-[10px] h-[10px]  md:w-[17px] md:h-[17px]'/>}
        </span>
      </div>
      <div className={`montserrat faq-answer text-[10px] lg:text-[15px] lg:leading-[17.6px] leading-[12.5px] md:text-[14px] md:leading-[16.6px] overflow-hidden transition-all duration-200 ease ${faq.open ? "max-h-screen opacity-100 py-1" : "max-h-0 opacity-0"}`}>
        {faq.answer}
      </div>
    </div>
  )
}






export default HomePageFAQ