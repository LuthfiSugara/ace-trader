'use client'

import React from 'react'
import { Image } from '..'
import useTranslation from '@/hooks/useTranslation';

const HeroAboutUs = () => {
    const { translation } = useTranslation();

    return (
        <div>
            <h1 className='text-center text-[30px] lg:text-[40px] font-bold text-white w-full md:w-[75%] mx-auto'>{translation('about.us.title')}</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12'>
                <div className='bg-[#06333D] p-[20px] rounded-xl space-y-2'>
                    <Image src='/images/vision.png' alt='vision' width={400} height={400}  className='w-[300px] mx-auto mt-2' />
                    <p className='text-xl text-white text-center font-bold mt-6 mb-4'>{translation('about.us.vision')}</p>
                    <p className='text-[#BDF6FF] text-center'>{translation('about.us.vision.description')}</p>
                </div>
                <div className='bg-[#06333D] p-[20px] rounded-xl space-y-2'>
                    <Image src='/images/mission.png' alt='mission' width={400} height={400} className='w-[300px] mx-auto mt-2' />
                    <p className='text-xl text-white text-center font-bold mt-6 mb-4'>{translation('about.us.mission')}</p>
                    <p className='text-[#BDF6FF] text-center'>{translation('about.us.mission.description')}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroAboutUs