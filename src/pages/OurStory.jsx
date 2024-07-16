import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const OurStory = () => {
  return (
    <div>
    <Navbar/>
        <div className='w-[90%] pt-[100px] mx-auto'>
        <div className='teko font-[700] text-[40px] lg:text-[96px] md:text-[60px] text-center text-[#DA3D12]'>Our Story</div>
        <div className='montserrat my-12 font-[600] text-[11px] lg:text-[20px] lg:leading-[24px] md:text-[15px] md:leading-[18px] leading-[15px] text-[#1C6360] text-center '>title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum  </div>

        <div className='grid grid-cols-3 gap-6 '>
            <img src='/HomePage/piledimg1.jpeg' alt='paneer' className=' lg:w-[365px] lg:h-[265px] object-cover mt-[50px] shadow-md'/>
            <img src='/HomePage/piledimg1.jpeg' alt='paneer' className=' lg:w-[365px] lg:h-[265px] object-cover mt-[50px] shadow-md'/>
            <img src='/HomePage/piledimg1.jpeg' alt='paneer' className=' lg:w-[365px] lg:h-[265px] object-cover mt-[50px] shadow-md'/>
           
        </div>

        <div className='flex gap-10 my-20'>
            <div className='w-[50%] flex items-start justify-start '>
            <img src='/HomePage/piledimg1.jpeg' alt='paneer' className=' lg:w-[603px] lg:h-[407px] object-cover  shadow-md'/>     
            </div>
            <div className='w-[50%] flex flex-col justify-start '>
                <div className='teko font-[600] text-[20px] md:text-[40px] text-[#1C6360]'>Title lorem ipsum title </div>
                <div className='montserrat font-[600] lg:text-[20px] lg:leading-[24px] md:text-[15px] md:leading-[18px] text-[#1C6360] text-[7px] leading-[9px]'>title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum  </div>
            </div>
        </div>
        <div className='flex gap-10 my-20'>
            <div className='w-[50%] flex flex-col justify-start '>
                <div className='teko font-[600] text-[20px] md:text-[40px] text-[#1C6360]'>Title lorem ipsum title </div>
                <div className='montserrat font-[600] lg:text-[20px] lg:leading-[24px] md:text-[15px] md:leading-[18px] text-[#1C6360] text-[7px] leading-[9px]'>title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum  </div>
            </div>
            <div className='w-[50%] flex items-start justify-start '>
            <img src='/HomePage/piledimg1.jpeg' alt='paneer' className=' lg:w-[603px] lg:h-[407px] object-cover  shadow-md'/>     
            </div>
        </div>

        <div className='flex gap-10 my-20'>
            <div className='w-[60%] flex gap-2'>
                <div className='w-[50%] h-[100%]'>
                <img src='/HomePage/paneer.jpeg' alt='paneer' className=' w-full h-full  object-cover  shadow-md'/> 

                </div>
                <div className='flex flex-col gap-2 w-[50%] h-[100%]'>
                <img src='/HomePage/piledimg1.jpeg' alt='paneer' className=' w-[100%] h-[50%]  object-cover  shadow-md'/> 
                <img src='/HomePage/piledimg1.jpeg' alt='paneer' className='w-[100%] h-[50%]  object-cover  shadow-md'/> 
                </div>
            </div>
            <div className='w-[40%] flex flex-col justify-start '>
                <div className='teko font-[600] text-[20px] text-[#1C6360] md:text-[40px]'>Title lorem ipsum title </div>
                <div className='montserrat font-[600] lg:text-[20px] lg:leading-[24px] md:text-[15px] md:leading-[18px] text-[#1C6360] text-[7px] leading-[9px]'>title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum  </div>
            </div>
        </div>

        </div>
        <Footer/>
    </div>
  )
}

export default OurStory