'use client'

import React from 'react'
import faqsData from "@/constant/data/faqs.json";
import Faq from '../Faq/Faq';
import Link from 'next/link';

const EverythingYouNeedToKnow = () => {

    return (
        <div className='mt-[100px]'>
            <p className='text-[30px] lg:text-[40px] font-bold text-center text-white'>Everything you need to know, in one place.</p>

            <div className='bg-[#06333D] rounded-t-xl mt-6'>
                {faqsData.faqs.map((faq: {title: string; description: string}, index: number) => {
                    return (
                        <Faq key={index} title={faq.title} description={faq.description} className={`${index != faqsData.faqs.length -1 ? 'border-b border-b-[#2F6F78]' : ''}`} />
                    )
                })}
            </div>

            <Link href=''>
                <p className='py-2 px-6 border border-white rounded-full text-white w-fit mx-auto mt-8'>View More</p>
            </Link>
        </div>
    )
}

export default EverythingYouNeedToKnow