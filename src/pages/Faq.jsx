import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Currynama?",
      answer:
        "Currynama is a fictional restaurant that serves delicious Indian cuisine, including a variety of curries, biryanis, and tandoori dishes.",
      open: true,
    },
    {
      question: "How can I place an order with Currynama?",
      answer:
        "You can place an order with Currynama through our website or mobile app. Simply select your items, add them to your cart, and proceed to checkout.",
      open: false,
    },
    {
      question: "What areas do you deliver to?",
      answer:
        "We deliver to select areas within the city. You can check if we deliver to your location by entering your address during the ordering process.",
      open: false,
    },
    {
      question: "What are your operating hours?",
      answer:
        "Our operating hours are from 11:00 AM to 10:00 PM, Monday to Sunday. Please note that delivery times may vary based on your location.",
      open: false,
    },
    {
      question: "How do you ensure the freshness of your food during delivery?",
      answer:
        "We use insulated packaging and temperature-controlled bags to maintain the freshness and quality of your food during delivery.",
      open: false,
    },
    {
      question: "How can I contact customer service?",
      answer:
        "You can contact our customer service team through the contact form on our website, via email at",
      open: false,
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, and popular digital payment methods like PayPal and Apple Pay.",
      open: false,
    },
    {
      question: "Do you have any promotions or discounts?",
      answer:
        "We offer regular promotions and discounts on select menu items. Check our website or social media pages for the latest deals.",
      open: false,
    },
    {
      question: "How do you ensure the freshness of your food during delivery?",
      answer:
        "Our packaging is designed to maintain the temperature and freshness of your food, ensuring it arrives hot and delicious.",
      open: false,
    },
    {
      question: "What is your return or refund policy?",
      answer:
        "If you are not satisfied with your order, please contact our customer service within 24 hours for assistance with refunds or replacements.",
      open: false,
    },
    {
      question: "Do you offer catering services?",
      answer:
        "Yes, we provide catering services for events and parties. Contact us for more information and customized menu options.",
      open: false,
    },
    {
      question: "How can I contact customer service?",
      answer:
        "You can reach our customer service through the contact form on our website, via email at support@sevenburgers.com, or by calling our hotline at (123) 456-7890.",
      open: false,
    },
    {
      question: "Do you have any promotions or discounts?",
      answer:
        "We regularly offer promotions and discounts. Check our website or subscribe to our newsletter for the latest deals.",
      open: false,
    }
  ]);

  const faqsRef = useRef(null);

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

  const scrollToBottom = () => {
    if (faqsRef.current) {
      // console.log(faqsRef.current.scrollHeight)
      faqsRef.current.scrollTo({ top: faqsRef.current.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[white]">
      <Navbar />
      <div className="pt-[100px]  text-[24px] md:text-[40px] lg:text-[85px] bg-[white] absolute w-full z-20 teko font-[700] text-center text-[#DA3D12]"> 
        Frequently Asked Questions
      </div>
      <div className="w-[90%] h-[900px] lg:h-[1000px] mx-auto relative flex lg:flex-row flex-col lg:pt-[220px]">
        <div className="lg:w-[40%] pt-[0px] md:pt-[100px] lg:pt-20 flex justify-center items-center m-auto">
          <img
            src="/Faq/1.png"
            alt="faq"
            className="z-[0] md:mt-20 w-[253px] md:w-[375px] md:h-[387px] h-[261px]  transition-all ease-linear duration-400 lg:w-[30%] lg:absolute lg:translate-y-[-50%] top-[50%] object-contain"
          />
        </div>
        <div className="lg:w-[55%]">
          <div
            ref={faqsRef}
            className="faqs w-full h-[300px] md:h-[250px] mt-[-100px] lg:h-[85%] md:mt-[30px] lg:mt-[30px]  overflow-y-scroll mx-auto cursor-pointer p-1"
          >
            {faqs.map((faq, index) => (
              <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
          </div>
          <div
            className="flex gap-2 lg:mb-0 mb-10 ml-2 lg:ml-5 w-full items-center hover:underline cursor-pointer mt-2"
            onClick={scrollToBottom}
          >
            <div className="montserrat font-[500] text-[10px] md:text-[14px] lg:text-[14px] text-[#1C6360]">
              Load more questions
            </div>
            <img src="/Faq/arrow.svg" alt="faq" className="lg:w-[16px] md:w-[16px] w-[14px]" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
