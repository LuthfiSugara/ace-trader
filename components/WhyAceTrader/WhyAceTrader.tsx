import React from 'react'
import { Image } from '..'

const WhyAceTrader = () => {
    return (
        <div className='space-y-8'>
            <p className='text-[30px] lg:text-[40px] font-bold text-white text-center lg:text-start'>Why traders choose Ace Trader?</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='bg-[#06333D] rounded-xl overflow-hidden'>
                    <Image src='/images/instant-funding.png' alt='instant funding' width={500} height={500} className='w-full' />
                    <div className='p-6 space-y-3'>
                        <p className='text-lg md:text-2xl text-white font-bold'>Instant Funding</p>
                        <p className=' md:text-xl text-[#BDF6FF]'>Start trading within hours. Our process is quick, simple, and transparent. Get funded instantly and focus on growing your profits.</p>
                    </div>
                </div>
                <div className='bg-[#06333D] rounded-xl overflow-hidden'>
                    <Image src='/images/scaling-plan.png' alt='instant funding' width={500} height={500} className='w-full' />
                    <div className='p-6 space-y-3'>
                        <p className='text-lg md:text-2xl text-white font-bold'>Scaling Plan</p>
                        <p className=' md:text-xl text-[#BDF6FF]'>Unlock growth potential. Scale up to $500K in capital as you meet your trading goals.</p>
                    </div>
                </div>
                <div className='bg-[#06333D] rounded-xl overflow-hidden'>
                    <Image src='/images/no-risk.png' alt='instant funding' width={500} height={500} className='w-full' />
                    <div className='p-6 space-y-3'>
                        <p className='text-lg md:text-2xl text-white font-bold'>No Risk</p>
                        <p className=' md:text-xl text-[#BDF6FF]'>Trade without risk to your personal funds. Our system protects your capital while rewarding your performance.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyAceTrader