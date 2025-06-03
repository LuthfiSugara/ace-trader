'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import useDisclosure from '@/hooks/useDisclosure';
import styles from './index.module.css';
import Image from '@/components/Image';
import useBreakPoint from '@/hooks/useBreakPoint';

const Index = () => {

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

  console.log('width : ', layoutWidth);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 shadow' id='navbar' ref={layoutRef} style={{background: isPageScrolled ? '#118C8A' : '#072B334D'}}>
      <nav className='w-full flex justify-between items-center gap-4 mx-auto'>
        <div className="w-full flex flex-row justify-between gap-4 items-center px-8 py-5" style={{display: layoutWidth < 950 ? 'none' : 'flex'}}>
          <Link href="/" className=''>
            <Image src='/images/logo.png' alt='logo' width={100} height={100} className='w-[180px]' />
          </Link>
          <div className='flex items-center gap-8'>
            <Link href={process.env.APP_URL + '#'} className='text-white text-sm md:text-lg font-medium'>Home</Link>
            <Link href={process.env.APP_URL + '#'} className='text-white text-sm md:text-lg font-medium'>About Us</Link>
            <Link href={process.env.APP_URL + '#'} className='text-white text-sm md:text-lg font-medium'>Plans</Link>
            <Link href={process.env.APP_URL + '#'} className='text-white text-sm md:text-lg font-medium'>FAQs</Link>
            <Link href={process.env.APP_URL + '#'} className='text-white text-sm md:text-lg font-medium'>Contact Us</Link>
            <Link href={process.env.APP_URL + '#'} className='text-white text-sm md:text-lg font-medium border border-white py-1 px-6 rounded-full'>Login</Link>
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
                <Link onClick={onClose} href={process.env.APP_URL + '#'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>Home</Link>
                <Link onClick={onClose} href={process.env.APP_URL + '#'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>About Us</Link>
                <Link onClick={onClose} href={process.env.APP_URL + '#'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>Plans</Link>
                <Link onClick={onClose} href={process.env.APP_URL + '#'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>FAQs</Link>
                <Link onClick={onClose} href={process.env.APP_URL + '#'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>Contact Us</Link>
                <Link onClick={onClose} href={process.env.APP_URL + '#'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>Login</Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Index