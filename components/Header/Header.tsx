'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import useDisclosure from '@/hooks/useDisclosure';
import styles from './Header.module.css';
import Image from '@/components/Image';
import useBreakPoint from '@/hooks/useBreakPoint';
import "@/components/Button/Button.css";

const Header = () => {

  const layoutRef = useRef<HTMLDivElement | null>(null);
  const layoutWidth = useBreakPoint(layoutRef);

  const {isOpen, onClose, onOpen} = useDisclosure(),
  [isPageScrolled, setIsPageScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 20) {
        setIsPageScrolled(true);
      } else {
        setIsPageScrolled(false);
      }
    }
  };


  return (
    <header className='fixed top-0 left-0 right-0 z-50 shadow' id='navbar' ref={layoutRef} style={{background: isPageScrolled ? '#118C8A' : '#072B334D'}}>
      <nav className='w-full max-w-[1400px] flex justify-between items-center gap-4 mx-auto'>
        <div className="w-full flex flex-row justify-between gap-4 items-center px-[40px] py-5" style={{display: layoutWidth < 950 ? 'none' : 'flex'}}>
          <Link href="/" className=''>
            <Image src='/images/logo.png' alt='logo' width={100} height={100} className='w-[180px]' />
          </Link>
          <div className='flex items-center gap-8 lg:pr-8'>
{/*             <Link href='/' className='text-white text-sm md:text-lg font-medium'>Home</Link> */}
            <Link href={process.env.APP_URL + '#plans'} className='text-white text-sm md:text-lg font-medium'>Programs</Link>
            <Link href={'/faqs'} className='text-white text-sm md:text-lg font-medium'>FAQs</Link>
            <Link href={'affiliate'} className='text-white text-sm md:text-lg font-medium'>Affiliate</Link>
            <Link href={'about-us'} className='text-white text-sm md:text-lg font-medium'>About Us</Link>            
{/*             <Link href={process.env.APP_URL + '#contact'} className='text-white text-sm md:text-lg font-medium'>Contact Us</Link>  */}
            
            <Link href={'https://dashboard.a-trader.com/en/sign-in'} className='text-white text-sm md:text-lg font-medium border border-white py-1 px-6 rounded-full'>Login</Link>
            <Link href={'https://dashboard.a-trader.com/en/challenges'} className="btn relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border-none p-[3px] shadow shadow-[#3baeba]">
              <span className="btnSpan relative z-[1] w-full rounded-[100px] bg-black px-6 py-2 text-base font-semibold text-[#fff] backdrop-blur-[40px]">
                Get Funded
              </span>
            </Link>
          </div>
        </div>
        <div className="p-[14px]" style={{display: layoutWidth < 950 ? 'block' : 'none'}}>
          <Link href="/" className=''>
            <Image src='/images/logo.png' alt='logo' width={100} height={100} className='w-[180px]' />
          </Link>
          <button onClick={isOpen ? onClose : onOpen} className={styles.menuIcon}>
            <div className="w-6">
              <Image
                src={isOpen ? '/icons/Close.png' : '/icons/Menu.png'}
                alt='menu'
                width={100}
                height={100}
                className=''
              />
            </div>
          </button>

          <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            <ul className={styles.menuItems}>
              <div className="flex flex-col gap-4">
                {/* <Link onClick={onClose} href={'/'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>Home</Link> */}
                <Link onClick={onClose} href={process.env.APP_URL + '#plans'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>Programs</Link>
                {/* <Link onClick={onClose} href={process.env.APP_URL + '#contact'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>Contact Us</Link> */}
                <Link onClick={onClose} href={'faqs'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>FAQs</Link>
                <Link onClick={onClose} href={'affiliate'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>Affiliate</Link>
                <Link onClick={onClose} href={'about-us'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>About Us</Link>
                <Link onClick={onClose} href={'https://dashboard.a-trader.com/en/sign-in'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>Login</Link>
              </div>
            </ul>
            <div className='flex justify-center'>
              <div className='absolute bottom-30 w-full md:w-[75%] px-[12px]'>
                <Link href={'https://dashboard.a-trader.com/en/challenges'} className="btn relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border-none p-[4px] shadow shadow-[#3baeba]">
                  <span className="btnSpan text-center relative z-[1] w-full rounded-[100px] bg-black px-6 py-2 text-base font-semibold text-[#fff] backdrop-blur-[40px]">
                    Get Funded
                  </span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Header
