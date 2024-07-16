
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)


 const {contextSafe } = useGSAP()

 const moveMenu = contextSafe(() => {
    const tl = gsap.timeline()
    tl.to('.menu', {x: "140%", duration: 0.5})
    tl.from('.menu .block', {x: "-500%", duration: 0.5, stagger: 0.1})
 })







 const moveMenuBack = contextSafe(() => {
    const tl = gsap.timeline()
    tl.to('.menu', {x: "-150%", duration: 2})
    
 })



 

  return (
    <div className='w-full h-[86px] bg-[#1C6360] fixed nav-shadow z-[50]'>
      <div className='md:flex lg:flex hidden w-[90%] m-auto justify-between items-center'>
        <Link to="/" >
          <img src='/logo.png' alt='logo' className='w-[88px] h-[83px]' />
        </Link>
        <div className='flex gap-[32px]'>
          <Link to='/' className='teko font-[700] hover:text-white transition-all ease-out duration-300 text-[20px] leading-[28.66px] text-[#FAB700]'>Home</Link>
          <Link to='#' className='teko font-[700] hover:text-white transition-all ease-out duration-300 text-[20px] leading-[28.66px] text-[#FAB700]'>Menu</Link>
          <Link to='#' className='teko font-[700] hover:text-white transition-all ease-out duration-300 text-[20px] leading-[28.66px] text-[#FAB700]'>Blogs</Link>
          <Link to='/faq' className='teko font-[700] hover:text-white transition-all ease-out duration-300 text-[20px] leading-[28.66px] text-[#FAB700]'>FAQ’s</Link>
          <Link to='/ourstory' className='teko font-[700] hover:text-white transition-all ease-out duration-300 text-[20px] leading-[28.66px] text-[#FAB700]'>Our Story</Link>
          <Link to='/contactus' className='teko font-[700] hover:text-white transition-all ease-out duration-300 text-[20px] leading-[28.66px] text-[#FAB700]'>Contact Us</Link>
        </div>
        <div></div>
      </div>

      <div>
        <div className='md:hidden relative lg:hidden   flex w-[100%] px-[5%]  m-auto justify-between items-center'>
          <div>
            <img src='/logo.png' alt='logo' className='w-[88px] h-[83px]' />
          </div>
          <div>
          <button onClick={() => {
            setIsOpen((prev) => !prev)

            // console.log(isOpen)

            if(!isOpen) moveMenu()
            else moveMenuBack()
          }}>

          {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                )}
          </button>
          <div >
            
              <div className='absolute menu top-[85px] left-[-150%] w-[105%] bg-[#1C6360] h-[calc(100vh-84px)]'>
              <div className='w-full h-[100%] flex flex-col justify-evenly items-center'>

                <Link to='#' className='block teko  text-[#FAB700] text-[40px] leading-[28.66px] text-center -10'>Home</Link>
                <Link to='#' className='block teko text-[#FAB700] text-[40px] leading-[28.66px] text-center -10'>Menu</Link>
                <Link to='#' className='block teko text-[#FAB700] text-[40px] leading-[28.66px] text-center -10'>Blogs</Link>
                <Link to='#' className='block teko text-[#FAB700] text-[40px] leading-[28.66px] text-center -4'>FAQ’s</Link>
                <Link to='#' className='block teko text-[#FAB700] text-[40px] leading-[28.66px] text-center -4'>Our Story</Link>
                <Link to='#' className='block teko text-[#FAB700] text-[40px] leading-[28.66px] text-center py'>Contact Us</Link>
              </div>
              </div>
          
          </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar