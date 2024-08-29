import React, { useState } from "react";
import HomePageFAQ from "./HomePageFAQ";
import { Link } from "react-router-dom";

const Questions = () => {
  const [faqs, setFaqs] = useState([
    {
      question: " What is Currynama?",
      answer:
        " Currynama is a premium cloud kitchen offering a wide range of authentic North Indian dishes, including delicious non-vegetarian options, available for delivery across Delhi NCR.",
      open: false,
    },
    {
      question: "What areas do you serve?",
      answer:
        "Currynama serves various locations across Delhi NCR. Please check our website or delivery app to see if we deliver to your area.",
      open: false,
    },
    {
      question: "How can I place an order?",
      answer:
        "You can order through our website or popular food delivery platforms like Zomato and Swiggy.",
      open: false,
    },
  ]);


  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div className="mb-10">
      <div className="teko text-[24px] leading-[34.39px] md:text-[32px] md:leading-[45.86px]  lg:text-[48px] lg:leading-[68.7px] font-[500] text-[#DA3D12] text-center ">
        Got Questions?
      </div>
      <div className="faqs w-full  mx-auto  p-1 ">
            {faqs.map((faq, index) => (
              <HomePageFAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
          </div>
          <div className="w-full flex justify-end">
          <Link to={"/faq"}>
            <button
             className="montserrat text-[10px] md:text-[12px] lg:text-[14px] mr-1 md:mr-12 mt-[-10px] md:mt-[-5px] lg:mr-[0px] font-[500] w-[80px] h-[20px] md:w-[90px] md:h-[25px] lg:w-[100px] lg:h-[30px]   anyMoreShadow">
            Any more..?
            </button>

          </Link>
          </div>
    </div>
  );
};

export default Questions;
