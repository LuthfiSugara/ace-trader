import React from 'react'
import { Image } from '..'

const WhatTradersSaying = () => {
    return (
        <div className='mt-[100px]'>
            <h2 className='text-[30px] lg:text-[40px] font-bold text-white'>What are traders saying?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[30px]">
                <div className='bg-[#06333D] p-[20px] rounded-xl space-y-3'>
                    <Image src='/images/sarah.png' alt='sarah' width={100} height={100} className='mx-auto' /> 
                    <p className='text-white text-xl text-center font-bold'>Sarah Malik</p>
                    <p className='text-[#BDF6FF] text-sm text-center italic'>Procurement Manager</p>
                    <p className='text-[#BDF6FF] text-md text-left'>Ace Trader has been an essential partner in helping us scale our import business. Their team is highly responsive, detail-oriented, and always goes the extra mile to ensure everything runs smoothly. We truly value their professionalism and consistency.</p>
                </div>
                <div className='bg-[#06333D] p-[20px] rounded-xl space-y-3'>
                    <Image src='/images/daniel.png' alt='sarah' width={100} height={100} className='mx-auto' /> 
                    <p className='text-white text-xl text-center font-bold'>Daniel Tanudjaja</p>
                    <p className='text-[#BDF6FF] text-sm text-center italic'>Owner of Tanudjaja Retail Group</p>
                    <p className='text-[#BDF6FF] text-md text-left'>From day one, Ace Trader impressed us with their dedication and expertise in international trade. They made the entire process—from sourcing to shipping—so much easier and more efficient. It’s rare to find a team this reliable.</p>
                </div>
                <div className='bg-[#06333D] p-[20px] rounded-xl space-y-3'>
                    <Image src='/images/nadia.png' alt='sarah' width={100} height={100} className='mx-auto' /> 
                    <p className='text-white text-xl text-center font-bold'>Nadia Rahmasari</p>
                    <p className='text-[#BDF6FF] text-sm text-center italic'>Founder of NARA Living</p>
                    <p className='text-[#BDF6FF] text-md text-left'>Ace Trader stands out for their excellent service and deep understanding of the import business. With their help, we’ve been able to reduce costs, speed up our logistics, and focus more on growing our retail operations. Highly recommended!</p>
                </div>
            </div>
        </div>
    )
}

export default WhatTradersSaying