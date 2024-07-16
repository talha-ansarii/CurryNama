import React, { useState } from "react";
import HomePageFAQ from "./HomePageFAQ";

const Questions = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What areas do you deliver to?",
      answer:
        "We deliver to various neighborhoods within the city. Please check our delivery area on our website or app for specific details.",
      open: false,
    },
    {
      question: "How can I contact customer service?",
      answer:
        "You can contact our customer service team by calling us at +91 1234567890 or by emailing us at",
      open: false,
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit and debit cards, as well as digital wallets like Paytm, Google Pay, and PhonePe.",
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
            <button className="montserrat text-[7px] md:text-[10px] lg:text-[12px] mr-1 md:mr-12 mt-[-10px] md:mt-[-5px] lg:mr-[0px] font-[500] w-[50px] h-[14px] md:w-[79px] md:h-[19px] lg:w-[91px] lg:h-[25px]   anyMoreShadow">
            Any more..?
            </button>
          </div>
    </div>
  );
};

export default Questions;
