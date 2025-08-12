'use client'


import React from 'react'
import useTranslation from '@/hooks/useTranslation';
import parse from 'html-react-parser';

const Index = () => {
    const { translation } = useTranslation();

    return (
        <div className='text-white'>
            <div className="pt-[100px] lg:pt-[150px] mb-12 md:mb-16" style={{background: 'linear-gradient(180deg, #118C8A 0%, #072B33 80.29%)'}}>
                <div className='max-w-[1400px] mx-auto px-8 lg:px-[40px] mt-4'>
                    <h2 className='text-start text-[30px] lg:text-[40px] font-bold mx-auto'>{translation('refund.policy.title')}</h2>
                </div>
            </div>

            <div className='max-w-[1400px] mx-auto px-8 lg:px-[40px]'>
                {translation('refund.policy.content').map((refundPolicy: string, index: number) => (
                    <div className='space-y-8' key={index}>{parse(refundPolicy)}</div>
                ))}
            </div>

        </div>
    )
}

export default Index