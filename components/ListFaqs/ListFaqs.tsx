'use client'

import React, { useEffect, useState } from 'react'
import Faq, { FaqProps } from '../Faq/Faq';
import Dropdown,{ FaqCategoryProps } from '../Dropdown/Dropdown';

const ListFaqs = () => {

    const [idCategory, setIdCategory] = useState(-1),
    [faqs, setFaqs] = useState([]),
    [categories, setCategories] = useState([]);

    const handleSelect = (option: FaqCategoryProps) => {
        setIdCategory(option.id);
    };

    useEffect(() => {
        fetch('/data/faqs.json')
        .then(res => res.json())
        .then(data => setFaqs(data.faqs));
    }, []);

    useEffect(() => {
        fetch('/data/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data.categories));
    }, []);

    return (
        <div className='max-w-[1400px] mx-auto px-8 lg:px-[40px]'>
            <h2 className='text-center text-[30px] lg:text-[40px] font-bold text-white w-full md:w-[75%] mx-auto'>Got questions? Find everything you need to know about our programs, rules, & how to get started.</h2>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-[100px]'>
                
                <Dropdown options={categories} onSelect={handleSelect} />

                {(
                    <div className='md:col-span-2 bg-[#06333D] rounded-xl h-fit'>
                        {faqs.map((faq: FaqProps, index: number) => {
                            return idCategory != -1 && idCategory === faq.category ? (
                                <Faq key={index} title={faq.title} description={faq.description} className={`${index != faqs.length -1 && faqs.length > 1  ? 'border-b border-b-[#2F6F78]' : ''}`} />
                            ) : idCategory === -1 ?(
                                <Faq key={index} title={faq.title} description={faq.description} className={`${index != faqs.length -1 && faqs.length > 1 ? 'border-b border-b-[#2F6F78]' : ''}`} />
                            ) : (
                                null
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ListFaqs