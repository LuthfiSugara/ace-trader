'use client'

import React, { useState } from 'react'
import { Collapse, Image } from '..';

interface FaqProps {
    title: string;
    description: string;
    className?: string;
}

const Faq = ({title, description, className}: FaqProps) => {

    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div 
            className={`${className} text-white cursor-pointer`}
            onClick={() => {setIsOpen(!isOpen)}}
        >
            <div className="flex justify-between items-center gap-4 px-[20px] sm:px-[40px] py-[13px]">
                <p className='font-bold text-lg'>{title}</p>
                <Image src='/icons/chevron-down.png' alt='collapse' width={1100} height={100} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'} w-[18px] h-[8px]`} />
            </div>
            <Collapse show={isOpen} startingHeight={0} className='bg-[#031F25]'>
                <div className='pxx-[20px] sm:px-[40px] py-[20px]'>
                    <p className='text-[#BDF6FF]'>{description}</p>
                </div>
            </Collapse>
        </div>
    )
}

export default Faq