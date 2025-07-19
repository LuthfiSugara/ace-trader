'use client'

import React from 'react'
import { Image } from '..'
import useTranslation from '@/hooks/useTranslation';

const WhatWeStandFor = () => {
    const { translation } = useTranslation();


    return (
        <div className='mt-[100px]'>
            <h2 className='text-[25px] lg:text-[30px] font-bold text-white'>{translation('about.us.team.motivation.title')}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-[30px]'>
                <div className='flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 bg-[#06333D] rounded-xl px-[15px] py-[40px]'>
                    <Image src='/images/integrity.png' alt='integrity' width={200} height={200} className='w-[100px]' />
                    <div className='space-y-2 text-center lg:text-start'>
                        <p className='text-xl text-white font-bold'>{translation('about.us.team.motivation.integrity')}</p>
                        <p className='text-[#BDF6FF]'>{translation('about.us.team.motivation.integrity.description')}</p>
                    </div>
                </div>
                <div className='flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 bg-[#06333D] rounded-xl px-[15px] py-[40px]'>
                    <Image src='/images/innovation.png' alt='innovation' width={200} height={200} className='w-[100px]' />
                    <div className='space-y-2 text-center lg:text-start'>
                        <p className='text-xl text-white font-bold'>{translation('about.us.team.motivation.innovation')}</p>
                        <p className='text-[#BDF6FF]'>{translation('about.us.team.motivation.innovation.description')}</p>
                    </div>
                </div>
                <div className='flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 bg-[#06333D] rounded-xl px-[15px] py-[40px]'>
                    <Image src='/images/trader-success.png' alt='trader success' width={200} height={200} className='w-[100px]' />
                    <div className='space-y-2 text-center lg:text-start'>
                        <p className='text-xl text-white font-bold'>{translation('about.us.team.motivation.trader.success')}</p>
                        <p className='text-[#BDF6FF]'>{translation('about.us.team.motivation.trader.success.description')}</p>
                    </div>
                </div>
                <div className='flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 bg-[#06333D] rounded-xl px-[15px] py-[40px]'>
                    <Image src='/images/community.png' alt='community' width={200} height={200} className='w-[100px]' />
                    <div className='space-y-2 text-center lg:text-start'>
                        <p className='text-xl text-white font-bold'>{translation('about.us.team.motivation.community')}</p>
                        <p className='text-[#BDF6FF]'>{translation('about.us.team.motivation.community.description')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeStandFor