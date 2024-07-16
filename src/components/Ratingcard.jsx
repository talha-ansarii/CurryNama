import React from 'react'

const Ratingcard = () => {
  return (
    <div>

        <div className=' w-[143px] h-[127px] rounded-[10px] md:rounded-[20px] bg-white ratingCardShadow md:w-[160px] md:h-[152px] lg:w-[220px] lg:h-[220px] p-4 flex flex-col justify-between lg:pb-5 lg:pt-14 lg:px-7' >
                <div className='text-[8px]  leading-[9.75px] md:text-[10px]  md:leading-[12px] lg:text-[13px]  lg:leading-[15px] font-[500] text-center montserrat'>
                "Currynama is my new go-to for Indian cuisine! The Butter Chicken is rich and creamy, with just the right amount of spice!"
                </div>
                <div className='flex flex-col gap-1'>

                <div className='flex justify-center'>
                    <img src='/HomePage/ratingCardStar.svg' alt='quote' className='w-[6px] h-[5px] md:w-[9px] md:h-[7px] lg:w-[10px] lg:h-[9px] ' />
                    <img src='/HomePage/ratingCardStar.svg' alt='quote' className='w-[6px] h-[5px] md:w-[9px] md:h-[7px] lg:w-[10px] lg:h-[9px] ' />
                    <img src='/HomePage/ratingCardStar.svg' alt='quote' className='w-[6px] h-[5px] md:w-[9px] md:h-[7px] lg:w-[10px] lg:h-[9px] ' />
                    <img src='/HomePage/ratingCardStar.svg' alt='quote' className='w-[6px] h-[5px] md:w-[9px] md:h-[7px] lg:w-[10px] lg:h-[9px] ' />
                    <img src='/HomePage/ratingCardStar.svg' alt='quote' className='w-[6px] h-[5px] md:w-[9px] md:h-[7px] lg:w-[10px] lg:h-[9px] ' />
                   
                    
                </div>
                <div className='montserrat font-[600] text-[13px] leading-[15px] lg:text-[15px] lg:only:leading-[18px]  text-center'>
                Priya Sharma
                </div>
                </div>
        </div>
    </div>
  )
}

export default Ratingcard