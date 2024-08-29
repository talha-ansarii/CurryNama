import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Currynama?",
      answer:
        "Currynama is a premium cloud kitchen offering a wide range of authentic North Indian dishes, including delicious non-vegetarian options, available for delivery across Delhi NCR.",
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
    {
      question: "What are your operating hours?",
      answer: "We operate from 11:00 AM to 11:00 PM, seven days a week.",
      open: false,
    },
    {
      question: "What type of cuisine do you offer?",
      answer:
        "Currynama specializes in premium North Indian cuisine, featuring a variety of vegetarian and non-vegetarian dishes.",
      open: false,
    },
    {
      question: "Do you use organic ingredients?",
      answer:
        "We prioritize high-quality ingredients and use organic products according to the dish to ensure the best taste and nutrition.",
      open: false,
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery times vary depending on your location and order size, but we aim to deliver within 45-60 minutes.",
      open: false,
    },
    {
      question: "Is there a minimum order amount?",
      answer:
        "Yes, the minimum order amount varies by location. Please check the details during the checkout process.",
      open: false,
    },
    {
      question: "Do you offer contactless delivery?",
      answer:
        "Yes, we offer contactless delivery for your safety and convenience. You can select this option during checkout.",
      open: false,
    },
    {
      question: "Can I schedule an order for a later time?",
      answer:
        "Yes, you can schedule your order in advance through our website or app.",
      open: false,
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, UPI, and net banking.",
      open: false,
    },
    {
      question: "Do you offer any discounts or promotions?",
      answer:
        "Yes, we regularly offer discounts and promotions. Please check our website or subscribe to our newsletter for the latest offers.",
      open: false,
    },
    {
      question: "How do we ensure food safety and hygiene?",
      answer:
        "We follow strict hygiene protocols and quality control measures to ensure that our food is prepared and delivered safely.",
      open: false,
    },
    {
      question: "How do you handle food allergies and special dietary requirements?",
      answer:
        "Please inform us of any allergies or dietary requirements when placing your order, and we will do our best to accommodate your needs.",
      open: false,
    },
    {
      question: "Can I customise my order?",
      answer:
        "Yes, you can customise your order to suit your preferences. Please use the customisation options available on our website or app.",
      open: false,
    },
    {
      question: "What should I do if there is an issue with my order?",
      answer:
        "If there is an issue with your order, please contact our customer support team immediately, and we will resolve it as quickly as possible.",
      open: false,
    },
    {
      question: "How can I provide feedback about my experience?",
      answer:
        "We value your feedback. You can provide feedback through our website, app, or by contacting our customer support team directly.",
      open: false,
    },
    {
      question: "Do you cater for events or large orders?",
      answer:
        "Yes, we offer catering services for events and large orders. Please contact us for more details and to make arrangements.",
      open: false,
    },
  ]);

  const [showLoadMore, setShowLoadMore] = useState(true);
  const faqsRef = useRef(null);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      faqsRef.current.scrollTo({
        top: faqsRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (faqsRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = faqsRef.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        setShowLoadMore(false);
      } else {
        setShowLoadMore(true);
      }
    }
  };

  useEffect(() => {
    const faqsContainer = faqsRef.current;
    if (faqsContainer) {
      faqsContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (faqsContainer) {
        faqsContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="bg-[white]">
      <Navbar />
      <div className="pt-[100px] text-[24px] md:text-[40px] lg:text-[85px] bg-[white] absolute w-full z-20 teko font-[700] text-center text-[#DA3D12]">
        Frequently Asked Questions
      </div>
      <div className="w-[90%] lg:h-[1000px] mx-auto relative flex lg:flex-row flex-col lg:pt-[220px]">
        <div className="lg:w-[40%] pt-[0px] mt-[150px] md:mt-0 lg:mt-0 md:pt-[100px] lg:pt-20 flex justify-center items-center m-auto">
          <img
            src="/Faq/1.png"
            alt="faq"
            className="z-[0] md:mt-20 w-[253px] md:w-[375px] md:h-[387px] h-[261px] transition-all ease-linear duration-400 lg:w-[30%] lg:absolute lg:translate-y-[-50%] top-[50%] object-contain"
          />
        </div>
        <div className="lg:w-[55%] mb-10 md:mb-0 lg:mb-0">
          <div
            ref={faqsRef}
            className="faqs w-full  md:h-[250px]  lg:h-[85%] md:mt-[30px] lg:mt-[30px] overflow-y-scroll  mx-auto cursor-pointer p-1"
          >
            {faqs.map((faq, index) => (
              <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
          </div>
          {showLoadMore && (
            <div
              className=" hidden md:flex lg:flex  gap-2 lg:mb-0 mb-10 ml-2 lg:ml-5 w-full items-center hover:underline cursor-pointer mt-2"
              onClick={scrollToBottom}
            >
              <div className="montserrat font-[500] text-[10px] md:text-[14px] lg:text-[14px] text-[#1C6360]">
                Load more questions
              </div>
              <img
                src="/Faq/arrow.svg"
                alt="faq"
                className="lg:w-[16px] md:w-[16px] w-[14px]"
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;

