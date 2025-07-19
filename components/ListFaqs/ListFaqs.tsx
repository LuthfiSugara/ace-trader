'use client'

import React, { useEffect, useState } from 'react'
import Faq, { FaqProps } from '../Faq/Faq';
import Dropdown,{ FaqCategoryProps } from '../Dropdown/Dropdown';
import Button from '../Button/Button';
import SelectDropdown, { SelectProps } from '../SelectDropdown/SelectDropdown';
import useTranslation from '@/hooks/useTranslation';
import { BaseSelect } from '@/types/components/filter.types';

const ListFaqs = () => {
    const { translation } = useTranslation();

    const [idCategory, setIdCategory] = useState(1),
    [faqs, setFaqs] = useState([]),
    [categories, setCategories] = useState([]);

    const handleSelect = (option: FaqCategoryProps) => {
        setIdCategory(option.id);
    };

    const handleOptionsMap = (datas: Array<BaseSelect>) => {
        const Arr: Array<SelectProps> = [];
        datas.map((data: BaseSelect) => {
            const tmpArr = {value: data, name: data};
            Arr.push(tmpArr);
        });

        return Arr;
    }

    useEffect(() => {
        fetch('/data/faqs.json')
        .then(res => res.json())
        .then(data => setFaqs(data.faqs));
    }, []);

    useEffect(() => {
        fetch('/data/categories.json')
        .then(res => res.json())
        .then(data => {
            setCategories(data.categories)
        });
    }, []);

    return (
        <div className='max-w-[1400px] mx-auto px-8 lg:px-[40px]'>
            <h2 className='text-center text-[30px] lg:text-[40px] font-bold text-white w-full md:w-[75%] mx-auto'>{translation('faq.title')}</h2>
            
            <div className='flex flex-col sm:flex-row flex-wrap gap-4 md:gap-8 justify-center pt-[100px] pb-[20px] md:pb-[50px]'>
                <div className='space-y-3 hidden md:block'>
                    <p className={`text-white text-start font-semibold`}>Plan</p>
                    <div className='flex justify-start flex-wrap gap-4'>
                        {filterPlans.map((plan, index) => {
                            return (
                                <Button
                                    key={index}
                                    onClick={() => {
                                        updateFilter('plans', plan.value);
                                    }}
                                    className={`${filter.plans.toLowerCase() == plan.value ? 'bg-[#06333D] text-[#BDF6FF] border-[#072B33]' : 'text-[#BDF6FF]'} capitalize border border-[#3AA7B8] p-[8px] md:p-[12px] rounded-xl hover:bg-[#06333D] hover:text-white hover:border-[#072B33]`}
                                >
                                    {plan.name}
                                </Button>
                            )
                        })}
                    </div>
                </div>

                {/* <SelectDropdown options={filterPlans} onSelect={handleSelectPlans} className='md:hidden w-full' /> */}


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