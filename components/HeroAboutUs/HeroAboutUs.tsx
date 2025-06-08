import React from 'react'
import { Image } from '..'

const HeroAboutUs = () => {
    return (
        <div>
            <h1 className='text-center text-[30px] lg:text-[40px] font-bold text-white w-full md:w-[75%] mx-auto'>Empowering Traders Around The World With Fair and Transparent Funding Opportunities.</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12'>
                <div className='bg-[#06333D] p-[20px] rounded-xl space-y-2'>
                    <Image src='/images/vision.png' alt='vision' width={400} height={400}  className='w-[300px] mx-auto mt-2' />
                    <p className='text-xl text-white text-center font-bold mt-6 mb-4'>Vision</p>
                    <p className='text-[#BDF6FF] text-center'>To provide aspiring traders with access to fair capital and structured evaluation programs that support consistent trading strategies.</p>
                </div>
                <div className='bg-[#06333D] p-[20px] rounded-xl space-y-2'>
                    <Image src='/images/mission.png' alt='mission' width={400} height={400} className='w-[300px] mx-auto mt-2' />
                    <p className='text-xl text-white text-center font-bold mt-6 mb-4'>Mission</p>
                    <p className='text-[#BDF6FF] text-center'>To build a global ecosystem where every dedicated trader has a chance to grow, succeed, & get funded - no matter where they come from.</p>
                </div>
            </div>
        </div>
    )
}

export default HeroAboutUs