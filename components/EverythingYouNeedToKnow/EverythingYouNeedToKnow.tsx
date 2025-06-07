'use client'

import React, { useEffect, useState } from 'react'
import Faq, { FaqProps } from '../Faq/Faq';
import Link from 'next/link';

const EverythingYouNeedToKnow = () => {

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch('/data/faqs.json')
        .then(res => res.json())
        .then(data => {
            const filtered = data.faqs
            .filter((faq: FaqProps) => faq.category === 3)
            .slice(0, 3);
            setFaqs(filtered);
        });
  }, []);

    return (
        <div className='mt-[100px]'>
            <p className='text-[30px] lg:text-[40px] font-bold text-center text-white'>Everything you need to know, in one place.</p>

            <div className='bg-[#06333D] rounded-t-xl mt-6'>
                {faqs.map((faq: FaqProps, index: number) => {
                    return (
                        <Faq key={index} title={faq.title} description={faq.description} className={`${index != faqs.length -1 ? 'border-b border-b-[#2F6F78]' : ''}`} />
                    )
                })}
            </div>

            <Link href='faqs'>
                <p className='py-2 px-6 border border-white rounded-full text-white w-fit mx-auto mt-8'>View More</p>
            </Link>
        </div>
    )
}

export default EverythingYouNeedToKnow