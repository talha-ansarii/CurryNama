import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      // Scrolling down and user has scrolled more than 80px
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const containerVariants = {
    hidden: {
      x: '100%',
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const imgVariants = {
    hidden: { opacity: 1, x: 1000 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className={`w-full h-[86px] bg-[#1C6360] fixed nav-shadow z-[50] transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className='md:flex lg:flex hidden w-[90%] m-auto justify-between items-center'>
        <Link to='/'>
          <img src='/logo.png' alt='logo' className='w-[88px] h-[83px]' />
        </Link>
        <div className='flex gap-[32px]'>
          <Link to='/' className='teko font-[700] hover:text-white transition-all ease-out duration-300 text-[20px] leading-[28.66px] text-[#FAB700]'>
            Home
          </Link>
          <Link to='#' className='teko font-[700] hover:text-white transition-all ease-out duration-300 text-[20px] leading-[28.66px] text-[#FAB700]'>
            Menu
          </Link>
          <Link to='/blogs' className='teko font-[700] hover:text-white transition-all ease-out duration-300 text-[20px] leading-[28.66px] text-[#FAB700]'>
            Blogs
          </Link>
          <Link to='/faq' className='teko font-[700] hover:text-white transition-all ease-out duration-300 text-[20px] leading-[28.66px] text-[#FAB700]'>
            FAQ’s
          </Link>
          <Link to='/ourstory' className='teko font-[700] hover:text-white transition-all ease-out duration-300 text-[20px] leading-[28.66px] text-[#FAB700]'>
            Our Story
          </Link>
          <Link to='/contactus' className='teko font-[700] hover:text-white transition-all ease-out duration-300 text-[20px] leading-[28.66px] text-[#FAB700]'>
            Contact Us
          </Link>
        </div>
        <div></div>
      </div>

      <div>
        <div className='md:hidden relative lg:hidden flex w-[100%] px-[5%] m-auto justify-between items-center'>
          <Link to={"/"} className='cursor-pointer'>
            <img src='/logo.png' alt='logo' className='w-[88px] h-[83px]' />
          </Link>
          <div>
            {!isOpen ? (
              <button onClick={() => setIsOpen(true)}>
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='white'
                  aria-hidden='true'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
                </svg>
              </button>
            ) : (
              <button onClick={() => setIsOpen(false)}>
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='white'
                  aria-hidden='true'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            )}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className='fixed md:hidden bg-[#1C6360] mt-[83px] h-[100vh] lg:hidden inset-0 z-[200] justify-evenly pb-[80px] items-start pl-6 text-font-blue inter font-[700] text-[20px] flex flex-col '
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={containerVariants}
            >
              <motion.div variants={linkVariants}>
                <Link className='flex gap-3 teko text-[#FAB700] text-[40px] leading-[28.66px] text-center -10' to='/'>
                  Home
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link className='flex gap-3 teko text-[#FAB700] text-[40px] leading-[28.66px] text-center -10' to='/'>
                  Menu
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link className='flex gap-3 teko text-[#FAB700] text-[40px] leading-[28.66px] text-center -10' to='/blogs'>
                  Blogs
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link className='flex gap-3 teko text-[#FAB700] text-[40px] leading-[28.66px] text-center -10' to='/faq'>
                  FAQ’s
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link className='flex gap-3 teko text-[#FAB700] text-[40px] leading-[28.66px] text-center -10' to='/ourstory'>
                  Our Story
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link className='flex gap-3 teko text-[#FAB700] text-[40px] leading-[28.66px] text-center -10' to='/contactus'>
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Navbar;
