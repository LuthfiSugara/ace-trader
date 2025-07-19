'use client'

import React from 'react'
import { Image } from '..'
import useTranslation from '@/hooks/useTranslation';

const WhyAceTrader = () => {

    const { translation } = useTranslation();

    return (
        <div className='space-y-8'>
            <p className='text-[30px] lg:text-[40px] font-bold text-white text-center lg:text-start'>{translation('home.why.trader.title')}</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='bg-[#06333D] rounded-xl overflow-hidden'>
                    <Image src='/images/instant-funding.png' alt='instant funding' width={500} height={500} className='w-full' />
                    <div className='p-6 space-y-3'>
                        <p className='text-lg md:text-2xl text-white font-bold'>{translation('home.why.trader.your.way')}</p>
                        <p className=' md:text-xl text-[#BDF6FF]'>{translation('home.why.trader.your.way.description')}</p>
                    </div>
                </div>
                <div className='bg-[#06333D] rounded-xl overflow-hidden'>
                    <Image src='/images/scaling-plan.png' alt='instant funding' width={500} height={500} className='w-full' />
                    <div className='p-6 space-y-3'>
                        <p className='text-lg md:text-2xl text-white font-bold'>{translation('home.why.trader.discipline')}</p>
                        <p className=' md:text-xl text-[#BDF6FF]'>{translation('home.why.trader.discipline.description')}</p>
                    </div>
                </div>
                <div className='bg-[#06333D] rounded-xl overflow-hidden'>
                    <Image src='/images/no-risk.png' alt='instant funding' width={500} height={500} className='w-full' />
                    <div className='p-6 space-y-3'>
                        <p className='text-lg md:text-2xl text-white font-bold'>{translation('home.why.trader.no.risk')}</p>
                        <p className=' md:text-xl text-[#BDF6FF]'>{translation('home.why.trader.no.risk.description')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyAceTrader