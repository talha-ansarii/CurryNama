import React, { useEffect, useState } from 'react'

const images = [
    '/HomePage/AWARD1.jpg',
    '/HomePage/AWARD2.jpg',
    
  ];

const Banner = () => {

    const [index, setIndex] = useState(0);
    
  
    useEffect(() => {
      const interval = setInterval(() => {
  
        if (index === 1) {
          setIndex(0);
        } else {
          setIndex((prev) => prev + 1);
        }
      }, 5000); 
  
      return () => clearInterval(interval);
    }
    , [index]);
  

  return (
    <div className='relative  w-full h-[155px] md:h-[361px] lg:h-[548px] '>
        <div  className='absolute flex left-[50%] translate-x-[-50%] top-0 w-[310px] h-[155px] md:h-[361px] md:w-[740px] lg:h-[548px] lg:w-[100%] border border-gray-500 bg-[#1c6360] text-white rounded-tr-[30px] rounded-bl-[30px] md:rounded-tr-[75px] md:rounded-bl-[75px] lg:rounded-tr-[100px] lg:rounded-bl-[100px] object-cover'>
        <div className='w-[30%] flex justify-center items-center'>
        <img src={images[index]} alt='banner' className=' object-cover p-4  md:p-10 lg:p-14 '/>

        </div>
        <div className='w-[70%] text-[6px] lg:text-[20px] md:text-[15px] text-center flex justify-center items-center px-[50px]  montserrat font-[700] '>
        {
            index === 0 ?  <div >
        Currynama proudly won ‘Best Debutant Cloud Kitchen of the Year’ at the Restaurant Awards
2022, demonstrating our commitment to providing mouthwatering, high-quality food and
outstanding service. We are honored to have our client’s trust and can't wait to further transform
the cloud kitchen experience!
        </div> : <div>Currynama is thrilled to have won the 2023 ET Hospitalityworld Awards ‘Newcomer in Cloud
Kitchen of the Year - North,’ honoring our dedication to inventive flavors and quality. We are
appreciative of our customer's support and eager to reinvent the cloud cooking experience!</div>

        }

        </div>
        </div>
        
        <div className='absolute bottom-[10px] md:bottom-[12px] lg:bottom-[15px] left-[50%] translate-x-[-50%] flex gap-1 '> 
            <div className={` w-[4px] h-[4px] lg:w-[10px] lg:h-[10px] md:w-[6px] md:h-[6px] rounded-full ${index === 0 ? "bg-black" : "bg-[#DA3D12]"} `}></div>
            <div className={` w-[4px] h-[4px] md:w-[6px] md:h-[6px] lg:w-[10px] lg:h-[10px] rounded-full ${index === 1 ? "bg-black" : "bg-[#DA3D12]"} `}></div>
    </div>

    </div>
  )
}

export default Banner