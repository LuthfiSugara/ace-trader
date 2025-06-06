import React from 'react'
import { Image } from '..'

const PeopleBehindAceTrader = () => {
    return (
        <div>
            <h2 className='text-[25px] lg:text-[30px] font-bold text-center text-white'>The People Behind Ace Trader</h2>
            <div className="flex flex-wrap justify-center gap-8 mx-auto mt-[50px]">
                <div className="w-full sm:w-[320px] bg-[#06333D] p-[25px] rounded-xl">
                    <Image src='/images/floyd.png' alt='floyd' width={200} height={200} className='w-[100px] mx-auto rounded-lg' />
                    <p className='text-lg text-white font-bold text-center mt-4 mb-1'>Floyd Miles</p>
                    <p className='text-md text-[#BDF6FF] text-center'>CEO Ace Trader</p>
                </div>
                <div className="w-full sm:w-[320px] bg-[#06333D] p-[25px] rounded-xl">
                    <Image src='/images/marvin.png' alt='floyd' width={200} height={200} className='w-[100px] mx-auto rounded-lg' />
                    <p className='text-lg text-white font-bold text-center mt-4 mb-1'>Marvin McKinney</p>
                    <p className='text-md text-[#BDF6FF] text-center'>Head of Marketing</p>
                </div>
                <div className="w-full sm:w-[320px] bg-[#06333D] p-[25px] rounded-xl">
                    <Image src='/images/jerome.png' alt='floyd' width={200} height={200} className='w-[100px] mx-auto rounded-lg' />
                    <p className='text-lg text-white font-bold text-center mt-4 mb-1'>Jerome Bell</p>
                    <p className='text-md text-[#BDF6FF] text-center'>Head of Productr</p>
                </div>
            </div>
        </div>
    )
}

export default PeopleBehindAceTrader