import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react';

const images = [
    '/HomePage/piledimg1.jpeg',
      '/HomePage/paneer.jpeg',
      '/HomePage/rose.jpeg',
    
  ];

const PiledCards = () => {
    const [index, setIndex] = useState(0);
    const [index1, setIndex1] = useState(1);
    const [index2, setIndex2] = useState(2);
  
    useEffect(() => {
      const interval = setInterval(() => {
  
        if (index === 2) {
          setIndex(0);
        } else {
          setIndex((prev) => prev + 1);
        }
  
  
        if (index1 === 2) {
          setIndex1(0);
        } else {
          setIndex1((prev) => prev + 1);
        }
        if (index2 === 2) {
          setIndex2(0);
        } else {
          setIndex2((prev) => prev + 1);
        }
        
        
      }, 2000); 
  
      return () => clearInterval(interval);
    }
    , [index, index1, index2]);





  return (
    <div className=" relative top-0 left-0 h-full mt-[40px] ">
      <img src={images[index]} alt='1' className='img1 absolute piledCardsShadow z-[30] top-[40px] lg:top-[100px] left-[50%] translate-x-[-50%] rounded-[7px] md:w-[192px] lg:w-[330px] lg:h-[389px] md:h-[223px] md:rounded-[20px] w-[110px] h-[130px] object-cover' />
      <img src={images[index1]} alt='1' className='img2 absolute piledCardsShadow z-[20] top-[40px] lg:top-[100px] left-[55%] translate-x-[-50%] rounded-[7px] md:w-[192px] lg:w-[330px] lg:h-[389px] md:h-[223px] md:rounded-[20px]  w-[110px] h-[130px] rotate-[11.21deg] object-cover' />
      <img src={images[index2]} alt='1' className='img3 absolute piledCardsShadow z-[10] top-[40px] lg:top-[100px] left-[45%] translate-x-[-50%] rounded-[7px] md:w-[192px] lg:w-[330px] lg:h-[389px] md:h-[223px] md:rounded-[20px]  w-[110px] h-[130px]  rotate-[-14.37deg] object-cover' />
    </div>

    
  );
}

export default PiledCards;
