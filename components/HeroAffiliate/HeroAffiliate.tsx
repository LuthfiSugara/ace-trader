'use client'

import useTranslation from '@/hooks/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroAffiliate = () => {
    const { translation } = useTranslation();

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center'>
            <div className='space-y-8 text-center lg:text-start order-2 lg:order-1'>
                <h2 className='text-3xl md:text-[40px] xl:text-[50px] text-white font-bold'>{translation('affiliate.title')}</h2>
                <p className='text-white text-lg w-full md:w-[65%] lg:w-full md:mx-auto lg:mx-0'>{translation('affiliate.description')}</p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                    <Link href={'https://dashboard.a-trader.com/en/sign-in'} className='text-white border border-white py-2 px-4 rounded-full'>{translation('affiliate.btn.login')}</Link>
                    <Link href={'https://dashboard.a-trader.com/en/sign-in'} className='text-[#072B33] bg-[#05CBE9] py-2 px-4 rounded-full'>{translation('affiliate.btn.signup')}</Link>
                </div>
            </div>
            <div className='flex justify-center lg:justify-end order-1 lg:order-2'>
                <Image src='/images/banner-affiliate.png' alt="hero" width={800} height={800} className="w-[450px] lg:w-[500px]" />
            </div>
        </div>
    )
}

export default HeroAffiliate