import React from 'react'

import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";


const HomePageFAQ = ({ faq, index, toggleFAQ }) => {
  return (
    
        <div
      className={`faq ${faq.open ? "open" : ""} my-4 p-2 lg:p-4 bg-[#F1F4F9] rounded-lg `}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question montserrat font-[700] text-[13px] leading-[21.6px] md:text-[16px] md:leading-[21.6px] lg:text-[22px] lg:leading-[26.6px] relative  pr-20 transition-all duration-500 ease-out">
        {faq.question}
        <span className=" cursor-pointer absolute top-[20px] right-[-10px] transform -translate-y-1/2 w-8 h-8 transition-all duration-500 ease-out">
          {faq.open ? <div><FaPlus className='rotate-[45deg] text-font-blue ' /></div>  : <FaPlus className='text-font-blue'/>}
        </span>
      </div>
      <div className={`montserrat faq-answer text-[9px] lg:text-[20px] lg:leading-[23.6px] leading-[9.5px] md:text-[14px] md:leading-[16.6px] overflow-hidden transition-all duration-200 ease ${faq.open ? "max-h-screen opacity-100 py-1" : "max-h-0 opacity-0"}`}>
        {faq.answer}
      </div>
    </div>
  )
}






export default HomePageFAQ