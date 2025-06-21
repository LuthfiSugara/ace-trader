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
                        <p className='text-lg md:text-2xl text-white font-bold'>Your Trading, Your Way</p>
                        <p className=' md:text-xl text-[#BDF6FF]'>Accessible on multiple trading platforms, pick between Assessment, Crypto, or Instant Funding to validate your edge, dive into digital markets, or secure capital in hours—so you can focus entirely on growing your equity.</p>
                    </div>
                </div>
                <div className='bg-[#06333D] rounded-xl overflow-hidden'>
                    <Image src='/images/scaling-plan.png' alt='instant funding' width={500} height={500} className='w-full' />
                    <div className='p-6 space-y-3'>
                        <p className='text-lg md:text-2xl text-white font-bold'>Discipline: Unlocked</p>
                        <p className=' md:text-xl text-[#BDF6FF]'>Our immersive plan sharpens your consistency, builds emotional resilience under pressure, and forges sustainable routines—because greater discipline drives stronger trading performance.</p>
                    </div>
                </div>
                <div className='bg-[#06333D] rounded-xl overflow-hidden'>
                    <Image src='/images/no-risk.png' alt='instant funding' width={500} height={500} className='w-full' />
                    <div className='p-6 space-y-3'>
                        <p className='text-lg md:text-2xl text-white font-bold'>No Risk</p>
                        <p className=' md:text-xl text-[#BDF6FF]'>Trade with zero personal risk: our platform safeguards your funds at every step while you pursue your Equity Growth Target and reap the rewards of your performance.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyAceTrader