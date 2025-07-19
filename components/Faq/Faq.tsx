'use client'

import React, { useState } from 'react'
import { Collapse, Image } from '..';

export interface FaqProps {
    plans?: string;
    plan_id?: number;
    product_type?: string;
    product_type_id?: number;
    category?: number;
    title: string;
    description: string[];
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
                <Image src='/icons/chevron-down.png' alt='collapse' width={100} height={100} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'} w-[18px] h-[8px]`} />
            </div>
            <Collapse show={isOpen} startingHeight={0} className='bg-[#031F25]'>
                <div className='px-[20px] sm:px-[40px] py-[20px]'>
                    {description.map((desc, index) => {
                        return (
                            <div key={index} className='text-[#BDF6FF]' dangerouslySetInnerHTML={{ __html: desc }}></div>
                        )
                    })}
                </div>
            </Collapse>
        </div>
    )
}

export default Faq