import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/HomePage/1.png',
    '/HomePage/2.png',
    '/HomePage/3.png',
    '/HomePage/4.png',
  
];

const RotatingImages = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);
  const [index2, setIndex2] = useState(2);
  const [index3, setIndex3] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {

      if (index === 3) {
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }


      if (index1 === 3) {
        setIndex1(0);
      } else {
        setIndex1((prev) => prev + 1);
      }
      if (index2 === 3) {
        setIndex2(0);
      } else {
        setIndex2((prev) => prev + 1);
      }
      if (index3 === 3) {
        setIndex3(0);
      } else {
        setIndex3((prev) => prev + 1);
      }
      
    }, 2000); 

    return () => clearInterval(interval);
  }
  , [index, index1, index2, index3]);


// console.log(index, index1, index2, index3)
  return (
    <div className="relative w-full h-[100%] flex justify-end items-center  ">
      <div className=' '>

        <div className=' w-full h-[100%] '>
        <div className='absolute md:top-[100px] top-[30px] left-[50%] translate-x-[-65%] md:left-[0px] lg:top-10 lg:left-0 border-[3px] opacity-[10%] border-white rounded-full lg:translate-x-0 md:translate-x-0 md:w-[300px] w-[200px] h-[200px] md:h-[300px] lg:w-[400px] lg:h-[400px]'></div>
    
        <img src={images[index]} alt='Rotating Image' className='absolute md:top-[100px] top-[30px] left-[50%] translate-x-[-65%] md:left-[0px] lg:top-10 lg:left-0 md:translate-x-0 lg:translate-x-0 object-contain w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] ' />
        </div>

        

        <div className=''>
          <img src='/HomePage/line.svg' alt='line' className='absolute lg:block md:hidden left-[270px] top-[60px] w-[350px] h-[350px] object-contain ' />
          <img src='/HomePage/lineBg.svg' alt='line' className='absolute lg:block md:hidden left-[270px] top-[60px] w-[350px] h-[350px] object-contain ' />
          <img src='/HomePage/lineSmall.svg' alt='line' className='absolute hidden md:block lg:hidden left-[190px] top-[125px] w-[300px] h-[250px] object-contain ' />
          <img src='/HomePage/lineSmallBg.svg' alt='line' className='absolute hidden md:block lg:hidden left-[190px] top-[125px] w-[300px] h-[250px] object-contain ' />
          <img src='/HomePage/lineSmall.svg' alt='line' className='absolute  md:hidden lg:hidden left-[200px] top-[50px] w-[170px] h-[170px] object-contain ' />
          <img src='/HomePage/lineSmallBg.svg' alt='line' className='absolute  md:hidden lg:hidden left-[200px] top-[50px]  w-[170px] h-[170px] object-contain ' />
          <img src={images[index1]} alt='line' className='absolute w-[30px] h-[30px] left-[270px] top-[60px] lg:left-[420px] md:left-[320px] lg:top-[90px] lg:w-[56px] lg:h-[56px] md:top-[150px] md:w-[35px] md:h-[35px] object-contain ' />
          <img src={images[index2]} alt='line' className='absolute w-[30px] h-[30px] left-[280px] top-[118px] lg:left-[440px] md:left-[340px] lg:top-[215px] lg:w-[56px] lg:h-[56px] md:top-[240px] md:w-[35px] md:h-[35px] object-contain ' />
          <img src={images[index3]} alt='line' className='absolute w-[30px] h-[30px] left-[270px] top-[175px] lg:left-[410px] md:left-[315px] lg:top-[335px] lg:w-[56px] lg:h-[56px] md:top-[320px] md:w-[35px] md:h-[35px] object-contain ' />
        
        </div>
      </div>
    </div>
  );
};

export default RotatingImages;
