'use client'

import React, { useEffect, useState } from 'react'
import Faq, { FaqProps } from '../Faq/Faq';
import Dropdown,{ FaqCategoryProps } from '../Dropdown/Dropdown';
import Button from '../Button/Button';
import SelectDropdown, { SelectProps } from '../SelectDropdown/SelectDropdown';
import useTranslation from '@/hooks/useTranslation';
import { BaseSelect } from '@/types/components/filter.types';
import { getCookie } from 'cookies-next';

const ListFaqs = () => {
    const { translation } = useTranslation();

    const lang = getCookie('lang') ?? 'en';

    const [faqs, setFaqs] = useState([]),
    [filterPlans, setFilterPlans] = useState<Array<SelectProps>>([]),
    [productType, setProductType] = useState<Array<SelectProps>>([]),
    [categories, setCategories] = useState([]),
    [filter, setFilter] = useState({
        plan_id: 1,
        product_type_id: 1,
        id_category: 1,
    });

    const updateFilter = (key: keyof typeof filter, value: string | number) => {
        setFilter(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleSelect = (option: FaqCategoryProps) => {
        updateFilter('id_category', option.id);
    };

    const handleSelectPlans = (option: SelectProps) => {
        updateFilter('plan_id', option.value);
    };
    const handleSelectProductType = (option: SelectProps) => {
        updateFilter('product_type_id', option.value);
    };

    const handleOptionsMap = (datas: Array<BaseSelect>) => {
        const Arr: Array<SelectProps> = [];
        datas.map((data: BaseSelect) => {
            const tmpArr = {value: data.id, name: data.name};
            Arr.push(tmpArr);
        });

        return Arr;
    }

    useEffect(() => {
        const filterPlanFile = `/data/filter/plan/plan_${lang}.json`;
        fetch(filterPlanFile)
        .then(res => res.json())
        .then(data => {
            setFilterPlans(handleOptionsMap(data.plans));
        });
    }, []);

    useEffect(() => {
        const filterProductTypeFile = `/data/filter/productType/product_type_${lang}.json`;
        fetch(filterProductTypeFile)
        .then(res => res.json())
        .then(data => {
            setProductType(handleOptionsMap(data.product_type));
        });
    }, []);

    useEffect(() => {
        const faqFile = `/data/faqs/faqs_${lang}.json`;
        fetch(faqFile)
        .then(res => res.json())
        .then(data => {
            setFaqs(data.faqs);
        });
    }, []);

    useEffect(() => {
        const categoriesFile = `/data/faqs/categories/categories_${lang}.json`;
        
        fetch(categoriesFile)
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
                    <p className={`text-white text-start font-semibold`}>{translation('global.filter.plan')}</p>
                    <div className='flex justify-start flex-wrap gap-4'>
                        {filterPlans.map((plan, index) => {
                            return (
                                <Button
                                    key={index}
                                    onClick={() => {
                                        updateFilter('plan_id', plan.value);
                                    }}
                                    className={`${filter.plan_id == plan.value ? 'bg-[#06333D] text-[#BDF6FF] border-[#072B33]' : 'text-[#BDF6FF]'} capitalize border border-[#3AA7B8] p-[8px] md:p-[12px] rounded-xl hover:bg-[#06333D] hover:text-white hover:border-[#072B33]`}
                                >
                                    {plan.name}
                                </Button>
                            )
                        })}
                    </div>
                </div>

                <SelectDropdown options={filterPlans} onSelect={handleSelectPlans} className='md:hidden w-full' />

                {filter.plan_id != 3 &&
                    <>
                        <div className='space-y-3 hidden md:block'>
                            <p className={`text-white text-start font-semibold`}>{translation('global.filter.product.type')}</p>
                            <div className='flex justify-start flex-wrap gap-4'>
                                {productType.map((type, index) => {
                                    return (
                                        <Button 
                                            key={index}
                                            onClick={() => {
                                                updateFilter('product_type_id', type.value);
                                            }}
                                            className={`${type.value === filter.product_type_id ? 'bg-[#06333D] text-[#BDF6FF] border-[#072B33]' : 'text-[#BDF6FF]'} capitalize border border-[#3AA7B8] p-[8px] md:p-[12px] rounded-xl hover:bg-[#06333D] hover:text-white hover:border-[#072B33]`}
                                        >
                                            {type.name}
                                        </Button>
                                    )
                                })}
                            </div>
                        </div>

                        <SelectDropdown options={productType} onSelect={handleSelectProductType} className='md:hidden w-full' />
                    </>
                }

            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                
                <Dropdown options={categories} onSelect={handleSelect} />

                {(
                    <div className='md:col-span-2 bg-[#06333D] rounded-xl h-fit'>
                        {faqs.map((faq: FaqProps, index: number) => {
                            return filter.plan_id != 3 && filter.id_category === faq.category && filter.plan_id === faq.plan_id && filter.product_type_id === faq.product_type_id ? (
                                <Faq 
                                    key={index} 
                                    title={faq.title} 
                                    description={faq.description} 
                                    className={`${index != faqs.length -1 && faqs.length > 1  ? 'border-b border-b-[#2F6F78]' : ''}`} 
                                />
                            ) : filter.plan_id === 3 && filter.plan_id == faq.plan_id && filter.id_category === faq.category ? (
                                <Faq 
                                    key={index} 
                                    title={faq.title} 
                                    description={faq.description} 
                                    className={`${index != faqs.length -1 && faqs.length > 1  ? 'border-b border-b-[#2F6F78]' : ''}`} 
                                />
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