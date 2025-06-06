'use client'

import React, { useState } from 'react'
import faqsData from "@/constant/data/faqs.json";
import listCategories from "@/constant/data/categories.json";
import Faq from '../Faq/Faq';
import Dropdown, { FaqProps } from '../Dropdown/Dropdown';

const ListFaqs = () => {

    const [idCategory, setIdCategory] = useState(-1);

    const handleSelect = (option: FaqProps) => {
        setIdCategory(option.id);
    };

    return (
        <div className='px-8 lg:px-[40px]'>
            <h2 className='text-center text-[30px] lg:text-[40px] font-bold text-white w-full md:w-[75%] mx-auto'>Got questions? Find everything you need to know about our programs, rules, & how to get started.</h2>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-[100px]'>
                
                <Dropdown options={listCategories.categories} onSelect={handleSelect} />

                <div className='md:col-span-2 bg-[#06333D] rounded-xl h-fit'>
                    {faqsData.faqs.map((faq: {category: number, title: string; description: string}, index: number) => {
                        return idCategory != -1 && idCategory === faq.category ? (
                            <Faq key={index} title={faq.title} description={faq.description} className={`${index != faqsData.faqs.length -1 && faqsData.faqs.length > 1  ? 'border-b border-b-[#2F6F78]' : ''}`} />
                        ) : idCategory === -1 ?(
                            <Faq key={index} title={faq.title} description={faq.description} className={`${index != faqsData.faqs.length -1 && faqsData.faqs.length > 1 ? 'border-b border-b-[#2F6F78]' : ''}`} />
                        ) : (
                            null
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ListFaqs