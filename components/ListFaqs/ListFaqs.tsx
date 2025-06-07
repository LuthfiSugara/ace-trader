'use client'

import React, { useEffect, useState } from 'react'
import Faq from '../Faq/Faq';
import Dropdown, { FaqProps } from '../Dropdown/Dropdown';
import axios from 'axios';

const ListFaqs = () => {

    const [categories, setCategories] = useState([]),
    [loadingCategories, setLoadingCategories] = useState(true),
    [idCategory, setIdCategory] = useState(-1),
    [faqData, setFaqData] = useState([]),
    [loadingFaqs, setLoadingFaq] = useState(true);

    const handleSelect = (option: FaqProps) => {
        setIdCategory(option.id);
    };

    const fetchCategories = async() => {
        await axios
        .get('/api/faq-categories')
        .then((res) => {
            setCategories(res.data.categories);
            setLoadingCategories(false);
        })
        .catch((err) => {
            console.error('Failed to fetch JSON:', err);
        });
    }

    const fetchFaqs = async() => {
        await axios
        .get('/api/list-faqs')
        .then((res) => {
            console.log('res : ', res.data.faqs);
            setFaqData(res.data.faqs);
            setLoadingFaq(false);
        })
        .catch((err) => {
            console.error('Failed to fetch JSON:', err);
        });
    }

    useEffect(() => {
        fetchCategories();
        fetchFaqs();
    }, []);

    return (
        <div className='px-8 lg:px-[40px]'>
            <h2 className='text-center text-[30px] lg:text-[40px] font-bold text-white w-full md:w-[75%] mx-auto'>Got questions? Find everything you need to know about our programs, rules, & how to get started.</h2>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-[100px]'>
                
                <Dropdown loading={loadingCategories} options={categories} onSelect={handleSelect} />

                {loadingFaqs ? (
                    <div className="animate-pulse md:col-span-2 bg-[#06333D] rounded-xl space-y-2">
                        <div className="bg-gray-200 h-10 rounded-lg"></div>
                        <div className="bg-gray-200 h-10 rounded-lg"></div>
                        <div className="bg-gray-200 h-10 rounded-lg"></div>
                        <div className="bg-gray-200 h-10 rounded-lg"></div>
                    </div>

                ) : (
                    <div className='md:col-span-2 bg-[#06333D] rounded-xl h-fit'>
                        {faqData && faqData.map((faq: {category: number, title: string; description: string}, index: number) => {
                            return idCategory != -1 && idCategory === faq.category ? (
                                <Faq key={index} title={faq.title} description={faq.description} className={`${index != faqData.length -1 && faqData.length > 1  ? 'border-b border-b-[#2F6F78]' : ''}`} />
                            ) : idCategory === -1 ?(
                                <Faq key={index} title={faq.title} description={faq.description} className={`${index != faqData.length -1 && faqData.length > 1 ? 'border-b border-b-[#2F6F78]' : ''}`} />
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