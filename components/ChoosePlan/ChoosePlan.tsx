'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Button from '../Button/Button'
import { Dialog, Image } from '..'
import Link from 'next/link'
import useDisclosure from '@/hooks/useDisclosure';
import { BenefitsProps, DataPlanProps } from '@/types/components/choose-plan.types'
import { PriceProps } from '@/types/components/price.types'
import useBreakPoint from '@/hooks/useBreakPoint'

interface ButtonInfoProps {
    onClick: () => void;
}

const ButtonInfo = ({onClick}: ButtonInfoProps) => {
    return (
        <Image onClick={onClick} src='/icons/info.png' alt='info' width={100} height={100} className='w-[14px] h-[14px] cursor-pointer' />
    )
}

const ChoosePlan = () => {

    const {isOpen, onClose, onOpen} = useDisclosure(),
    [information, setInformation] = useState<string[]>([""]),
    [dataPlans, setDataPlans] = useState<DataPlanProps | null>(null),
    [price, setPrice] = useState<PriceProps | null>(null),
    [accountBalance, setAccountBalance] = useState<Array<number> | null>([]),
    [platform, setPlatform] = useState<Array<string> | null>([]),
    [filter, setFilter] = useState({
        plans: 'standard',
        account_balance: 5,
        product_type: '1-step',
        platform: 'Ctrader'
    });

    const layoutRef = useRef<HTMLDivElement | null>(null);
    const layoutWidth = useBreakPoint(layoutRef);

    const plans = ['standard', 'crypto', 'instant'],
    productType = ['1-step', '2-step'];

    const updateFilter = (key: keyof typeof filter, value: string | number) => {
        setFilter(prev => ({
            ...prev,
            [key]: value
        }));
    };

    useEffect(() => {
        fetch('/data/plans.json')
        .then(res => res.json())
        .then(data => {
            setDataPlans(data.choose_plans[0]);
        });
    }, []);

    const handleFilter = useCallback(() => {
        fetch('/data/plans.json')
        .then(res => res.json())
        .then(data => {
            let result = data.choose_plans.find(
                (item: DataPlanProps) => item.plan === filter.plans && item.product_type === filter.product_type
            );

            if(filter.plans == 'instant'){
                result = data.choose_plans.find(
                    (item: DataPlanProps) => item.plan === filter.plans
                );
            }

            setDataPlans(result);
        });
    }, [filter])

    const handlePrice = useCallback(() => {
        fetch('/data/plans-price.json')
        .then(res => res.json())
        .then(data => {
            if(filter.plans == 'instant'){
                const result = data.plans_price.find(
                    (item: PriceProps) => item.plan === filter.plans && item.account_balance === filter.account_balance && item.platform === filter.platform
                );

                setPrice(result);
            }else{
                const result = data.plans_price.find(
                    (item: PriceProps) => item.plan === filter.plans && item.product_type === filter.product_type && item.account_balance === filter.account_balance && item.platform === filter.platform
                );

                setPrice(result);
            }

        });
    }, [filter])

    const handleBalance = useCallback(() => {
        fetch('/data/filter-plans.json')
        .then(res => res.json())
        .then(data => {
            if(filter.plans === 'crypto'){
                updateFilter('platform', 'dxtrade');
            }

            if(filter.plans != 'instant'){
                const result = data.filter_plans.find(
                    (item: DataPlanProps) => item.plan === filter.plans && item.product_type === filter.product_type
                );

                setAccountBalance(result.balance);
                setPlatform(result.platform);
            }else{

                const result = data.filter_plans.find(
                    (item: DataPlanProps) => item.plan === filter.plans
                );

                setAccountBalance(result.balance);
                setPlatform(result.platform);
            }
        });
    }, [])

    useEffect(() => {
        handleFilter();
        handleBalance();
        handlePrice();
    }, [handleFilter, handlePrice]);

    const isAllSameExceptLast = (arr: Array<string>): boolean => {
        if (arr.length < 2) return false;

        const first = arr[0];
        const last = arr[arr.length - 1];
        const allButLast = arr.slice(0, -1);
        return allButLast.every((item: string) => item === first) && last !== first;
    };

    return (
        <div ref={layoutRef} className='target-element mt-[100px] space-y-8' id='plans'>
            <h2 className='text-[30px] lg:text-[40px] text-white font-bold text-center'>Choose the plan that fits you!</h2>

            <div className='flex flex-col flex-wrap justify-center gap-[32px] bg-[#06333D] rounded-xl p-[16px] md:p-[16px]'>
                <div className={`${layoutWidth < 950 ? 'flex-col' : 'flex-row'} flex justify-center gap-8`}>
                    <div className='space-y-3'>
                        <p className={`text-white text-start ${layoutWidth > 950 ? 'sm:text-start' : 'sm:text-center'}  font-semibold`}>Plan</p>
                        <div className='flex jjustify-start sm:justify-center flex-wrap gap-4'>
                            {plans.map((plan, index) => {
                                return (
                                    <Button
                                        key={index}
                                        onClick={() => {
                                            updateFilter('plans', plan);
                                            updateFilter('account_balance', 5);
                                        }}
                                        className={`${filter.plans.toLowerCase() == plan.toLowerCase() ? 'bg-[#05CBE966] text-white' : 'text-[#BDF6FF]'} capitalize border border-[#3AA7B8] p-[8px] md:p-[12px] rounded-xl hover:bg-[#05CBE966] hover:text-white`}
                                    >
                                        {plan}
                                    </Button>
                                )
                            })}
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <p className={`text-white text-start ${layoutWidth > 950 ? 'sm:text-start' : 'sm:text-center'} font-semibol`}>Account Balance</p>
                        <div className='flex justify-start sm:justify-center flex-wrap gap-4'>
                            {accountBalance && accountBalance.map((balance, index) => {
                                return (
                                    <Button 
                                        key={index} 
                                        onClick={() => updateFilter('account_balance', balance)}
                                        className={`${balance === filter.account_balance ? 'bg-[#05CBE966] text-white' : 'text-[#BDF6FF]'}  border border-[#3AA7B8] p-[8px] md:p-[12px] rounded-[12px] hover:bg-[#05CBE966] hover:text-white`}
                                    >
                                        {balance}K
                                    </Button>   
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className={`${layoutWidth < 950 ? 'flex-col' : 'flex-row'} flex justify-center gap-8`}>
                    {filter.plans != 'instant' &&
                        <div className='space-y-3'>
                            <p className={`text-white text-start ${layoutWidth > 950 ? 'sm:text-start' : 'sm:text-center'} font-semibold`}>Product Type</p>
                            <div className='flex justify-start sm:justify-center flex-wrap gap-4'>
                                {productType.map((type, index) => {
                                    return (
                                        <Button 
                                            key={index}
                                            onClick={() => updateFilter('product_type', type)}
                                            className={`${type === filter.product_type ? 'bg-[#05CBE966] text-white' : 'text-[#BDF6FF]'}  capitalize border border-[#3AA7B8] p-[8px] md:p-[12px] rounded-[12px] hover:bg-[#05CBE966] hover:text-white`}
                                        >
                                            {type}
                                        </Button>
                                    )
                                })};
                            </div>
                        </div>
                    }
                    <div className='space-y-3'>
                        <p className={`text-white text-start ${layoutWidth > 950 ? 'sm:text-start' : 'sm:text-center'} font-semibold`}>Platform</p>
                        <div className='flex justify-start sm:justify-center flex-wrap gap-4'>
                            {platform && platform.map((data, index) => {
                                return (
                                    <Button 
                                        key={index}
                                        onClick={() => updateFilter('platform', data)}
                                        className={`${data === filter.platform ? 'bg-[#05CBE966] text-white' : 'text-[#BDF6FF]'} border border-[#3AA7B8] p-[8px] md:p-[12px] rounded-[12px] hover:bg-[#05CBE966] hover:text-white`}
                                    >
                                        <Image src={`/icons/${data}.png`} alt='ctrader' width={100} height={100} className='w-[100px]' />
                                    </Button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden lg:block bg-[#06333D] rounded-xl py-[32px]'>
                <table className='w-full'>
                    <tbody>
                        <tr>
                            <td className='border-b border-b-[#072B33]'></td>
                            {dataPlans?.rule_area.map((_, index) => {
                                return (
                                    <td key={index} className='py-[20px] border-b border-b-[#072B33]'>
                                        <p className='w-fit mx-auto bg-[#05CBE9] py-[4px] px-[10px] text-[#031F25] text-center rounded-[8px]'>{index + 1}</p>
                                    </td>

                                )
                            })}
                            <td className='max-w-[120px] border-b border-b-[#072B33]'></td>
                        </tr>
                        <tr className=''>
                            <td className='max-w-[120px] border-b border-b-[#072B33]'></td>
                            {dataPlans?.rule_area.map((rule, index) => {
                                return (
                                    <td key={index} className='border-b border-b-[#072B33] py-2'>
                                        <p className='w-fit mx-auto py-[4px] px-[10px] text-white font-semibold text-[18px] xl:text-[20px] text-center'>{rule}</p>
                                    </td>

                                )
                            })}
                            <td className='max-w-[120px] border-b border-b-[#072B33]'></td>
                        </tr>

                        {dataPlans?.benefits.map((benefit: BenefitsProps, index: number) => {
                            return (
                                <tr key={index}>
                                    <td className='border-b border-b-[#072B33]'>
                                        <div className="flex items-center gap-2 p-[20px]">
                                            <p className='text-white'>{benefit.name}</p>
                                            <ButtonInfo 
                                                onClick={() => {
                                                    setInformation(benefit.info ?? []);
                                                    onOpen();
                                                }} 
                                            />
                                        </div>
                                    </td>
                                    {benefit.data.map((data, index: number) => {
                                        return index != benefit.data.length -1 ? (
                                            <td key={index} className='border-b border-b-[#072B33] text-center'>
                                                <div className='w-fit mx-auto p-[20px] text-[#BDF6FF]' dangerouslySetInnerHTML={{ __html: data }}></div>
                                            </td>
                                        ) : (
                                            <td key={index} className='max-w-[120px] border-b border-b-[#072B33] text-center'>
                                                <p className='w-fit mx-auto p-[20px] text-[#BDF6FF] text-sm lg:text-base' dangerouslySetInnerHTML={{ __html: data }}></p>
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <div className='flex justify-center items-center gap-32 p-[40px]'>
                    <div className="flex gap-12">
                        <div className='flex items-center gap-4'>
                            <p className='text-white text-[16px] self-center'>Account size:</p>
                            <p className='font-bold text-[24px] text-[#05CBE9]'>${price?.account_balance}K</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='text-white text-[16px] self-center'>Price:</p>
                            <p className='font-bold text-[24px] text-[#05CBE9]'>{price?.price}</p>
                        </div>
                    </div>
                    <div>
                        <Link href={price?.link_register ?? ''} target='_blank' className='bg-[#05CBE9] py-[12px] px-[32px] rounded-full'>Start Trading</Link>
                    </div>
                </div>
            </div>

            <div className='lg:hidden bg-[#06333D] rounded-xl py-[32px] px-[24px]'>
                <p className='text-center font-bold text-[38px] text-[#05CBE9]'>{price?.price}</p>
                <p className='text-[#05CBE9] text-[16px] font-medium text-center mb-6'>for {price?.account_balance}k Account</p>
                <Link href={price?.link_register ?? ''} target="_blank">
                    <p className='bg-[#05CBE9] text-[#072B33] text-center w-full py-[4px] rounded-xl'>Start Trading</p>
                </Link>
                
                <div className='py-[40px]'>
                    {dataPlans?.benefits.map((benefit, index) => {
                        return (
                            <div key={index} className='space-y-2 border-b border-b-[#072B33] py-4'>
                                <div className="flex items-center gap-2">
                                    <p className='text-[#aeaeae] text-[14px]'>{benefit.name}</p>
                                    {benefit.info ? (
                                        <ButtonInfo 
                                            onClick={() => {
                                                setInformation(benefit.info ?? []);
                                                onOpen();
                                            }} 
                                        />
                                    ) : null}
                                </div>
                                {isAllSameExceptLast((benefit.data.join(',')).split(',')) === false ? (
                                    dataPlans.rule_area.map((data, index) => {
                                        return (
                                            <div key={index} className='flex justify-between items-center gap-4'>
                                                <div className='flex items-center gap-2'>
                                                    <span className='text-[10px] px-2 py-0.5 bg-[#638388] rounded-full text-white'>{index + 1}</span>
                                                    <span className='text-white text-[14px]'>{data}</span>
                                                </div>
                                                <p className='text-[#BDF6FF]' dangerouslySetInnerHTML={{ __html: benefit.data[index] }}></p>
                                            </div>
                                        )
                                    })
                                ) : (
                                    <div className='flex justify-between items-center gap-4'>
                                        <div className='flex items-center gap-2'>
                                            <span className='text-white text-[14px]'>{dataPlans.rule_area.join(', ')}</span>
                                        </div>
                                        <p className='text-[#BDF6FF]' dangerouslySetInnerHTML={{ __html: benefit.data[0] }}></p>
                                    </div>
                                )}

                                <p className='text-[#BDF6FF] text-sm text-end' dangerouslySetInnerHTML={{ __html: benefit.data[benefit.data.length - 1] }}></p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <Dialog
                isOpen={isOpen} 
                onClose={onClose} 
                size='xs'
            >
                <div className='bg-[#06333D] p-[8]'>
                    <div className='text-[#BDF6FF]' dangerouslySetInnerHTML={{ __html: information }}></div>
                </div>
            </Dialog>
        </div>
    )
}

export default ChoosePlan