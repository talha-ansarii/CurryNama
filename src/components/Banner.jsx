import React, { useEffect, useState } from 'react'

const images = [
    '/HomePage/banner1.jpg',
      '/HomePage/banner2.jpg',
      '/HomePage/banner3.jpg',
    
  ];

const Banner = () => {

    const [index, setIndex] = useState(0);
    
  
    useEffect(() => {
      const interval = setInterval(() => {
  
        if (index === 2) {
          setIndex(0);
        } else {
          setIndex((prev) => prev + 1);
        }
  
  
     
        
        
      }, 2000); 
  
      return () => clearInterval(interval);
    }
    , [index]);
  

  return (
    <div className='relative w-full h-[155px] md:h-[361px] lg:h-[548px] '>
        <img src={images[index]} alt='banner' className='absolute left-[50%] translate-x-[-50%] top-0 w-[310px] h-[155px] md:h-[361px] md:w-[740px] lg:h-[548px] lg:w-[1219px] border border-gray-500 rounded-tr-[30px] rounded-bl-[30px] md:rounded-tr-[75px] md:rounded-bl-[75px] lg:rounded-tr-[100px] lg:rounded-bl-[100px] object-cover' />
        
        <div className='absolute bottom-[10px] md:bottom-[12px] lg:bottom-[15px] left-[50%] translate-x-[-50%] flex gap-1 '> 
            <div className={` w-[4px] h-[4px] lg:w-[10px] lg:h-[10px] md:w-[6px] md:h-[6px] rounded-full ${index === 0 ? "bg-[#1C6360]" : "bg-[#DA3D12]"} `}></div>
            <div className={` w-[4px] h-[4px] md:w-[6px] md:h-[6px] lg:w-[10px] lg:h-[10px] rounded-full ${index === 1 ? "bg-[#1C6360]" : "bg-[#DA3D12]"} `}></div>
            <div className={` w-[4px] h-[4px] lg:w-[10px] lg:h-[10px] md:w-[6px] md:h-[6px] rounded-full ${index === 2 ? "bg-[#1C6360]" : "bg-[#DA3D12]"} `}></div>
    </div>

    </div>
  )
}

export default Banner