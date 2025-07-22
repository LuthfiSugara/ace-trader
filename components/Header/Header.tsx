'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import useDisclosure from '@/hooks/useDisclosure';
import styles from './Header.module.css';
import Image from '@/components/Image';
import useBreakPoint from '@/hooks/useBreakPoint';
import "@/components/Button/Button.css";
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import useTranslation from '@/hooks/useTranslation';

const Header = () => {

  const { translation } = useTranslation();

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
        <div className="w-full flex flex-row justify-between gap-4 items-center px-[40px] py-5" style={{display: layoutWidth < 1170 ? 'none' : 'flex'}}>
          <Link href="/" className=''>
            <Image onClick={onClose} src='/images/logo.png' alt='logo' width={100} height={100} className='w-[180px]' />
          </Link>
          <div className='flex items-center gap-8 lg:pr-8'>
            <Link href={process.env.APP_URL + '#plans'} className='text-white text-sm md:text-lg font-medium'>{translation('global.btn.programs')}</Link>
            <Link href={'/faqs'} className='text-white text-sm md:text-lg font-medium'>{translation('global.btn.faq')}</Link>
            <Link href={'/affiliate'} className='text-white text-sm md:text-lg font-medium'>{translation('global.btn.affiliate')}</Link>
            <Link href={'/about-us'} className='text-white text-sm md:text-lg font-medium'>{translation('global.btn.about.us')}</Link>
            
            <Link href={'https://dashboard.a-trader.com/en/sign-in'} className='text-white text-sm md:text-lg font-medium border border-white py-1 px-6 rounded-full'>{translation('global.btn.login')}</Link>
            <Link href={'https://dashboard.a-trader.com/en/challenges'} className="btn relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border-none p-[3px]" style={{boxShadow: '0px 5px 10px 0px rgba(255,255,255,0.73)'}}>
              <span className="btnSpan relative z-[1] w-full rounded-[100px] bg-[#fffeff] px-6 py-2 text-base font-bold text-black backdrop-blur-[40px]">
                {translation('global.btn.get.funded')}
              </span>
            </Link>
            <LanguageDropdown />
          </div>
        </div>
        <div className="p-[14px] w-full" style={{display: layoutWidth < 1170 ? 'block' : 'none'}}>
          <div className="flex gap-4 items-center">
            <Link href="/" className=''>
              <Image onClick={onClose} src='/images/logo.png' alt='logo' width={100} height={100} className='w-[180px]' />
            </Link>
            <div className='flex justify-end w-full '>
              <LanguageDropdown />
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
            </div>
          </div>

          <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            <ul className={styles.menuItems}>
              <div className="flex flex-col gap-4">
                <Link onClick={onClose} href={process.env.APP_URL + '#plans'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>{translation('global.btn.programs')}</Link>
                <Link onClick={onClose} href={'/faqs'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>{translation('global.btn.faq')}</Link>
                <Link onClick={onClose} href={'/affiliate'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>{translation('global.btn.affiliate')}</Link>
                <Link onClick={onClose} href={'/about-us'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>{translation('global.btn.about.us')}</Link>
                <Link onClick={onClose} href={'https://dashboard.a-trader.com/en/sign-in'} className='text-white text-lg md:text-lg font-medium border-b-[1px] border-[#ffffff33] px-4 py-2'>{translation('global.btn.login')}</Link>
              </div>
            </ul>
            <div className='flex justify-center'>
              <div className=' mt-20 w-full md:w-[75%] px-[12px]'>
                <Link href={'https://dashboard.a-trader.com/en/challenges'} className="btn relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border-none p-[4px]" style={{boxShadow: '0px 5px 10px 0px rgba(255,255,255,0.73)'}}>
                  <span className="btnSpan text-center relative z-[1] w-full rounded-[100px] bg-[#fffeff] px-6 py-2 text-base font-bold text-black backdrop-blur-[40px]">
                    {translation('global.btn.get.funded')}
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
