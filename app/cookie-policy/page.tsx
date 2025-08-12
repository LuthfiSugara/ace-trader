'use client'

import React from 'react'
import useTranslation from '@/hooks/useTranslation';
import parse from 'html-react-parser';

const Index = () => {
    const { translation } = useTranslation();

    return (
        <div className='text-white'>
            <div className="pt-[100px] lg:pt-[150px] mb-12 md:mb-24" style={{background: 'linear-gradient(180deg, #118C8A 0%, #072B33 80.29%)'}}>
                <div className='max-w-[1400px] mx-auto px-8 lg:px-[40px] mt-4'>
                    <h2 className='text-start text-[30px] lg:text-[40px] font-bold mx-auto'>{translation('cookie.policy.title')}</h2>
                </div>
            </div>

            <div className='max-w-[1400px] mx-auto px-8 lg:px-[40px] space-y-8'>
                {translation('cookie.policy.content').map((cookiePolicy: string, index: number) => (
                    <div key={index}>{parse(cookiePolicy)}</div>
                ))}
            </div>
        </div>

    )
}

export default Index