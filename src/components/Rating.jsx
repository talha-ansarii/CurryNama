import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'


const Rating = () => {
    useGSAP(()=> {
        const tl = gsap.timeline({repeat: -1})

        

tl.to('.star1', {
    duration: 0.3, 
    scale: 1.3,  
});
tl.to('.star1', {
    duration: 0.3, 
    scale: 1,  
});
tl.to('.star2', {
    duration: 0.3, 
    scale: 1.3,  
});
tl.to('.star2', {
    duration: 0.3, 
    scale: 1,  
});
tl.to('.star3', {
    duration: 0.3, 
    scale: 1.3,  
});
tl.to('.star3', {
    duration: 0.3, 
    scale: 1,  
});
tl.to('.star4', {
    duration: 0.3, 
    scale: 1.3,  
});
tl.to('.star4', {
    duration: 0.3, 
    scale: 1,  
});
tl.to('.star5', {
    duration: 0.3, 
    scale: 1.3,  
});
tl.to('.star5', {
    duration: 0.3, 
    scale: 1,  
});
       
        
    })
  return (
    <div className='relative h-[103px] flex justify-center items-center mb-[50px] '>
        <div className='montserrat absolute font-[900] md:text-[150px] md:leading-[182.85px] text-[96px] leading-[117.02px] lg:text-[200px] lg:leading-[243.8px
] text-[#B41C55]/[30%]'>
        4.5
        </div>
        <div className='flex gap-1 absolute left-[50%] translate-x-[-50%] bottom-[10px] md:bottom-[-10px] lg:bottom-[-37px]'>
            <img src='/HomePage/star.svg' alt='star' className='star1 w-[15px] h-[14px] md:w-[18px] md:h-[14.68px] lg:w-[35px] lg:h-[32px]' />
            <img src='/HomePage/star.svg' alt='star' className='star2 w-[15px] h-[14px] md:w-[18px] md:h-[14.68px] lg:w-[35px] lg:h-[32px]' />
            <img src='/HomePage/star.svg' alt='star' className='star3 w-[15px] h-[14px] md:w-[18px] md:h-[14.68px] lg:w-[35px] lg:h-[32px]' />
            <img src='/HomePage/star.svg' alt='star' className=' star4 w-[15px] h-[14px] md:w-[18px] md:h-[14.68px] lg:w-[35px] lg:h-[32px]' />
            <img src='/HomePage/starHalf.svg' alt='star' className='star5 w-[15px] h-[14px] md:w-[18px] md:h-[14.68px] lg:w-[35px] lg:h-[32px]' />
        </div>
        <div className='font-[500] text-[20px] leading-[28px] md:text-[28px] md:leading-[38.69px] lg:text-[32px] lg:leading-[45.86px] text-[#DA3D12] teko absolute -bottom-[20px] md:bottom-[-50px] lg:bottom-[-90px]'>Average Customer Rating</div>
    </div>
  )
}

export default Rating