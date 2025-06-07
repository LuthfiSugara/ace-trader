import React from 'react'
import { Image } from '..'

const WhatWeStandFor = () => {
    return (
        <div className='mt-[100px]'>
            <h2 className='text-[25px] lg:text-[30px] font-bold text-white'>What We Stand For</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-[30px]'>
                <div className='flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 bg-[#06333D] rounded-xl px-[15px] py-[40px]'>
                    <Image src='/images/integrity.png' alt='integrity' width={200} height={200} className='w-[100px]' />
                    <div className='space-y-2 text-center lg:text-start'>
                        <p className='text-xl text-white font-bold'>Integrity</p>
                        <p className='text-[#BDF6FF]'>We hold ourself and our traders to the highest ethical standards, transparency, fairness, and honesty are non negotiables in everything we do.</p>
                    </div>
                </div>
                <div className='flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 bg-[#06333D] rounded-xl px-[15px] py-[40px]'>
                    <Image src='/images/innovation.png' alt='integrity' width={200} height={200} className='w-[100px]' />
                    <div className='space-y-2 text-center lg:text-start'>
                        <p className='text-xl text-white font-bold'>Innovation</p>
                        <p className='text-[#BDF6FF]'>We constantly refine our systems, trading tools, and funding models to stay ahead of the market and deliver smarter solutions for our traders.</p>
                    </div>
                </div>
                <div className='flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 bg-[#06333D] rounded-xl px-[15px] py-[40px]'>
                    <Image src='/images/trader-success.png' alt='integrity' width={200} height={200} className='w-[100px]' />
                    <div className='space-y-2 text-center lg:text-start'>
                        <p className='text-xl text-white font-bold'>Trader Success</p>
                        <p className='text-[#BDF6FF]'>Your growth is our mission. We invest in your potential, provide feedback, and celebrate every milestone you hit.</p>
                    </div>
                </div>
                <div className='flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 bg-[#06333D] rounded-xl px-[15px] py-[40px]'>
                    <Image src='/images/community.png' alt='integrity' width={200} height={200} className='w-[100px]' />
                    <div className='space-y-2 text-center lg:text-start'>
                        <p className='text-xl text-white font-bold'>Community</p>
                        <p className='text-[#BDF6FF]'>{"We're building a global network of disciplined, motivated traders who support each other and grow together"}.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeStandFor