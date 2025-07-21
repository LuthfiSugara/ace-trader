'use client'

import React from 'react'
import { Image } from '..'
import useTranslation from '@/hooks/useTranslation';

const PeopleBehindAceTrader = () => {
    const { translation } = useTranslation();

    return (
        <div>
            <h2 className='text-[25px] lg:text-[30px] font-bold text-center text-white'>{translation('about.us.team.title')}</h2>
            <div className="flex flex-wrap justify-center gap-8 mx-auto mt-[50px]">
                <div className="w-full sm:w-[320px] bg-[#06333D] p-[25px] rounded-xl">
                    <Image src='/images/CEO.png' alt='floyd' width={200} height={200} className='w-[100px] mx-auto rounded-lg' />
                    <p className='text-lg text-white font-bold text-center mt-4 mb-1'>{translation('about.us.team.ceo')}</p>
                    <p className='text-md text-[#BDF6FF] text-center'>{translation('about.us.team.ceo.name')}</p>
                </div>
                <div className="w-full sm:w-[320px] bg-[#06333D] p-[25px] rounded-xl">
                    <Image src='/images/COO.png' alt='floyd' width={200} height={200} className='w-[100px] mx-auto rounded-lg' />
                    <p className='text-lg text-white font-bold text-center mt-4 mb-1'>{translation('about.us.team.coo')}</p>
                    <p className='text-md text-[#BDF6FF] text-center'>{translation('about.us.team.coo.name')}</p>
                </div>
                <div className="w-full sm:w-[320px] bg-[#06333D] p-[25px] rounded-xl">
                    <Image src='/images/CTC.png' alt='floyd' width={200} height={200} className='w-[100px] mx-auto rounded-lg' />
                    <p className='text-lg text-white font-bold text-center mt-4 mb-1'>{translation('about.us.team.ctc')}</p>
                    <p className='text-md text-[#BDF6FF] text-center'>{translation('about.us.team.ctc.name')}</p>
                </div>
            </div>
        </div>
    )
}

export default PeopleBehindAceTrader