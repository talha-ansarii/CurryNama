import React from 'react';

const RatingCard = () => {
  // Data for each card
  const cardsData = [
    {
      text: "Currynama is my new go-to for Indian cuisine! The Butter Chicken is rich and creamy, with just the right amount of spice. The Dum Ka Murgh is tender and flavorful. Highly recommend!",
      name: "Priya Sharma",
      star: 5
    },
    {
      text: "Absolutely loved the Paneer Tikka! The spices were perfectly balanced, and the paneer was cooked to perfection. Currynama never disappoints.",
      name: "Amit Patel",
      star: 4
    },
    {
      text: "The best Biryani I've had in a while! The rice was fluffy, and the spices were just right. Currynama has won my heart with their delicious food.",
      name: "Neha Kapoor",
      star: 5
    },
    {
      text: "A delightful experience with Currynama's food. The Garlic Naan was soft and buttery, and the Chicken Tikka Masala was heavenly. Will order again!",
      name: "Rahul Verma",
      star: 4
    }
  ];

  return (
    <div className='lg:w-[100%]  md:w-[87%] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6'>
      {cardsData.map((card, index) => (
        <div
          key={index}
          className='bg-white hover:scale-105 transition-all duration-300  rounded-[10px] md:rounded-[20px] p-4 md:p-5 lg:p-6 flex flex-col justify-between h-full shadow-md'
        >
          <div className='text-[10px] md:text-[12px] lg:text-[14px] leading-[14px] md:leading-[16px] lg:leading-[18px] font-[500] text-center montserrat mb-2'>
            {card.text}
          </div>
          <div className='flex flex-col items-center gap-1'>
            <div className='flex justify-center mb-1'>
              {Array(card.star)
                .fill()
                .map((_, i) => (
                  <img
                    key={i}
                    src='/HomePage/ratingCardStar.svg'
                    alt='star'
                    className='w-[10px] h-[10px] md:w-[12px] md:h-[12px] lg:w-[14px] lg:h-[14px]'
                  />
                ))}
            </div>
            <div className='montserrat font-[600] text-[12px] md:text-[14px] lg:text-[16px] text-center'>
              {card.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RatingCard;
