'use client'

import React, { useEffect, useState } from 'react'
import Faq, { FaqProps } from '../Faq/Faq';
import Dropdown,{ FaqCategoryProps } from '../Dropdown/Dropdown';
import Button from '../Button/Button';
import SelectDropdown, { SelectProps } from '../SelectDropdown/SelectDropdown';

const ListFaqs = () => {

    const [faqs, setFaqs] = useState([]),
    [filterPlans, setFilterPlans] = useState<Array<SelectProps>>([]),
    [productType, setProductType] = useState<Array<SelectProps>>([]),
    [categories, setCategories] = useState([]),
    [filter, setFilter] = useState({
        plans: 'standard',
        product_type: '2-step',
        id_category: 1,
    });

    const updateFilter = (key: keyof typeof filter, value: string | number) => {
        setFilter(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleSelect = (option: FaqCategoryProps) => {
        updateFilter('id_category', option.value);
    };

    const handleSelectPlans = (option: SelectProps) => {
        updateFilter('plans', option.value);
    };
    const handleSelectProductType = (option: SelectProps) => {
        updateFilter('product_type', option.value);
    };

    const handleOptionsMap = (datas: Array<string>) => {
        const Arr: Array<SelectProps> = [];
        datas.map((data: string | number) => {
            const tmpArr = {value: data, name: data};
            Arr.push(tmpArr);;
        });

        return Arr;
    }

    useEffect(() => {
        fetch('/data/faqs.json')
        .then(res => res.json())
        .then(data => {
            setFilterPlans(handleOptionsMap(data.filter_faqs.plans));
            setProductType(handleOptionsMap(data.filter_faqs.product_type));
            setFaqs(data.faqs);
        });
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
            <h2 className='text-center text-[30px] lg:text-[40px] font-bold text-white w-full md:w-[75%] mx-auto'>Got questions? Find everything you need to know about our programs, rules, & how to get started.</h2>
            
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

                <SelectDropdown options={filterPlans} onSelect={handleSelectPlans} className='md:hidden w-full' />

                {filter.plans != 'instant' &&
                    <div className='space-y-3 hidden md:block'>
                        <p className={`text-white text-start font-semibold`}>Product Type</p>
                        <div className='flex justify-start flex-wrap gap-4'>
                            {productType.map((type, index) => {
                                return (
                                    <Button 
                                        key={index}
                                        onClick={() => {
                                            updateFilter('product_type', type.value);
                                        }}
                                        className={`${type.value === filter.product_type ? 'bg-[#06333D] text-[#BDF6FF] border-[#072B33]' : 'text-[#BDF6FF]'} capitalize border border-[#3AA7B8] p-[8px] md:p-[12px] rounded-xl hover:bg-[#06333D] hover:text-white hover:border-[#072B33]`}
                                    >
                                        {type.name}
                                    </Button>
                                )
                            })};
                        </div>
                    </div>
                }

                <SelectDropdown options={productType} onSelect={handleSelectProductType} className='md:hidden w-full' />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                
                <Dropdown options={categories} onSelect={handleSelect} />

                {(
                    <div className='md:col-span-2 bg-[#06333D] rounded-xl h-fit'>
                        {faqs.map((faq: FaqProps, index: number) => {
                            return filter.id_category === faq.category && filter.plans === faq.plans && filter.product_type === faq.product_type ? (
                                <Faq key={index} title={faq.title} description={faq.description} className={`${index != faqs.length -1 && faqs.length > 1  ? 'border-b border-b-[#2F6F78]' : ''}`} />
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