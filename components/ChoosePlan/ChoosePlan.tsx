'use client'

import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import { Dialog, Image } from '..'
import Link from 'next/link'
import useDisclosure from '@/hooks/useDisclosure';

interface ButtonInfoProps {
    onClick: () => void;
}

interface PlansProps {
  profit_target: string[];
  maximum_loss: string[];
  maximum_daily_loss: string[];
  minimum_trading_days: string[];
  leverage: string[];
}

const ButtonInfo = ({onClick}: ButtonInfoProps) => {
    return (
        <Image onClick={onClick} src='/icons/info.png' alt='info' width={100} height={100} className='w-[14px] h-[14px] cursor-pointer' />
    )
}

const ChoosePlan = () => {

    const {isOpen, onClose, onOpen} = useDisclosure(),
    [planInformation, setPlanInformation] = useState<PlansProps>(),
    [information, setInformation] = useState<string[]>([""]),
    [filter, setFilter] = useState({
        plans: 'standard',
        account_balance: 5,
        product_type: '1-step',
        platform: 'Ctrader'
    });

    const plans = ['standard', 'crypto', 'instant'],
    accountBalance = [5, 10, 25, 50, 100, 250, 450],
    productType = ['1-step', '2-step'],
    platform = ['Ctrader', 'dxtrade', 'match-trader'];

    const updateFilter = (key: keyof typeof filter, value: string | number) => {
        setFilter(prev => ({
            ...prev,
            [key]: value
        }));
    };

    useEffect(() => {
        fetch('/data/info-plan.json')
        .then(res => res.json())
        .then(data => setPlanInformation(data));
    }, []);

    return (
        <div className='target-element mt-[100px] space-y-8' id='plans'>
            <h2 className='text-[30px] lg:text-[40px] text-white font-bold text-center'>Choose the plan that fits you!</h2>

            <div className='flex flex-wrap gap-[32px] bg-[#06333D] rounded-xl p-[16px] md:p-[32px]'>
                <div className='space-y-3'>
                    <p className='text-white font-semibold'>Plan</p>
                    <div className='flex flex-wrap gap-4'>
                        {plans.map((plan, index) => {
                            return (
                                <Button
                                    key={index}
                                    onClick={() => updateFilter('plans', plan)}
                                    className={`${filter.plans.toLowerCase() == plan.toLowerCase() ? 'bg-[#05CBE966] text-white' : 'text-[#BDF6FF]'} capitalize border border-[#3AA7B8] p-[8px] md:p-[12px] rounded-xl hover:bg-[#05CBE966] hover:text-white`}
                                >
                                    {plan}
                                </Button>
                            )
                        })}
                    </div>
                </div>
                <div className='space-y-3'>
                    <p className='text-white font-semibold'>Account Balance</p>
                    <div className='flex flex-wrap gap-4'>
                        {accountBalance.map((balance, index) => {
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
                <div className='space-y-3'>
                    <p className='text-white font-semibold'>Product Type</p>
                    <div className='flex flex-wrap gap-4'>
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
                <div className='space-y-3'>
                    <p className='text-white font-semibold'>Platform</p>
                    <div className='flex flex-wrap gap-4'>
                        {platform.map((data, index) => {
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

            <div className='hidden md:block bg-[#06333D] rounded-xl py-[32px]'>
                <table className='w-full'>
                    <tbody>
                        <tr>
                            <td className='border-b border-b-[#072B33]'></td>
                            <td  className='py-[20px] border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto bg-[#05CBE9] py-[4px] px-[10px] text-[#031F25] rounded-[8px]'>1</p>
                            </td>
                            <td  className='py-[20px] border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto bg-[#05CBE9] py-[4px] px-[10px] text-[#031F25] rounded-[8px]'>2</p>
                            </td>
                            <td className='py-[20px] border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto bg-[#05CBE9] py-[4px] px-[10px] text-[#031F25] rounded-[8px]'>3</p>
                            </td>
                        </tr>
                        <tr className=''>
                            <td></td>
                            <td className='border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto py-[4px] px-[10px] text-white font-semibold text-[24px]'>Student</p>
                            </td>
                            <td className='border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto py-[4px] px-[10px] text-white font-semibold text-[24px]'>Practitioner</p>
                            </td>
                            <td className='border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto py-[4px] px-[10px] text-white font-semibold text-[24px]'>Master</p>
                            </td>
                        </tr>
                        <tr className=''>
                            <td className='border-b border-b-[#072B33]'>
                                <div className="flex items-center gap-2 p-[20px]">
                                    <p className='text-white'>Profit Target</p>
                                    <ButtonInfo 
                                        onClick={() => {
                                            setInformation(planInformation?.profit_target ?? []);
                                            onOpen();
                                        }} 
                                    />
                                </div>
                            </td>
                            <td className='border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto p-[20px] text-[#BDF6FF]'>$400 (8%)</p>
                            </td>
                            <td className='border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto p-[20px] text-[#BDF6FF]'>$250 (5%)</p>
                            </td>
                            <td className='border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto p-[20px] text-[#BDF6FF]'>-</p>
                            </td>
                        </tr>
                        <tr className=''>
                            <td className='border-b border-b-[#072B33]'>
                                <div className="flex items-center gap-2 p-[20px]">
                                    <p className='text-white'>Maximum Loss</p>
                                    <ButtonInfo 
                                        onClick={() => {
                                            setInformation(planInformation?.maximum_loss ?? []);
                                            onOpen();
                                        }} 
                                    />
                                </div>
                            </td>
                            <td className='border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto p-[20px] text-[#BDF6FF]'>10%</p>
                            </td>
                            <td className='border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto p-[20px] text-[#BDF6FF]'>10%</p>
                            </td>
                            <td className='border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto p-[20px] text-[#BDF6FF]'>10%</p>
                            </td>
                        </tr>
                        <tr className=''>
                            <td className='border-b border-b-[#072B33]'>
                                <div className="flex items-center gap-2 p-[20px]">
                                    <p className='text-white'>Maximum Daily Loss</p>
                                    <ButtonInfo 
                                        onClick={() => {
                                            setInformation(planInformation?.maximum_daily_loss ?? []);
                                            onOpen();
                                        }} 
                                    />
                                </div>
                            </td>
                            <td className='border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto p-[20px] text-[#BDF6FF]'>5%</p>
                            </td>
                            <td className='border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto p-[20px] text-[#BDF6FF]'>5%</p>
                            </td>
                            <td className='border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto p-[20px] text-[#BDF6FF]'>5%</p>
                            </td>
                        </tr>
                        <tr className=''>
                            <td className='border-b border-b-[#072B33]'>
                                <div className="flex items-center gap-2 p-[20px]">
                                    <p className='text-white'>Minimum Trading Days</p>
                                    <ButtonInfo 
                                        onClick={() => {
                                            setInformation(planInformation?.minimum_trading_days ?? []);
                                            onOpen();
                                        }} 
                                    />
                                </div>
                            </td>
                            <td className='border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto p-[20px] text-[#BDF6FF]'>3 days</p>
                            </td>
                            <td className='border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto p-[20px] text-[#BDF6FF]'>3 days</p>
                            </td>
                            <td className='border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto p-[20px] text-[#BDF6FF]'>-</p>
                            </td>
                        </tr>
                        <tr className=''>
                            <td className='border-b border-b-[#072B33]'>
                                <div className="flex items-center gap-2 p-[20px]">
                                    <p className='text-white'>Leverage</p>
                                    <ButtonInfo 
                                        onClick={() => {
                                            setInformation(planInformation?.leverage ?? []);
                                            onOpen();
                                        }} 
                                    />
                                </div>
                            </td>
                            <td className='border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto p-[20px] text-[#BDF6FF]'>1:100</p>
                            </td>
                            <td className='border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto p-[20px] text-[#BDF6FF]'>1:100</p>
                            </td>
                            <td className='border-b border-b-[#072B33]'>
                                <p className='w-fit mx-auto p-[20px] text-[#BDF6FF]'>1:100</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className='flex justify-center items-center gap-32 p-[40px]'>
                    <div className="flex gap-12">
                        <div className='flex items-center gap-4'>
                            <p className='text-white text-[16px] self-center'>Account size:</p>
                            <p className='font-bold text-[24px] text-[#05CBE9]'>$5K</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='text-white text-[16px] self-center'>Price:</p>
                            <p className='font-bold text-[24px] text-[#05CBE9]'>$69</p>
                        </div>
                    </div>
                    <div>
                        <Link href='' className='bg-[#05CBE9] py-[12px] px-[32px] rounded-full'>Start Trading</Link>
                    </div>
                </div>
            </div>

            <div className='md:hidden bg-[#06333D] rounded-xl py-[32px] px-[24px]'>
                <p className='text-center font-bold text-[38px] text-[#05CBE9]'>$69</p>
                <p className='text-[#05CBE9] text-[16px] font-medium text-center mb-6'>for 5k Account</p>
                <Link href=''>
                    <p className='bg-[#05CBE9] text-[#072B33] text-center w-full py-[4px] rounded-xl'>Start Trading</p>
                </Link>

                <div className='py-[40px]'>
                    <div className='space-y-2 border-b border-b-[#072B33] py-4'>
                        <div className="flex items-center gap-2">
                            <p className='text-[#aeaeae] text-[14px]'>Profit Target</p>
                            <ButtonInfo 
                                onClick={() => {
                                    setInformation(planInformation?.profit_target ?? []);
                                    onOpen();
                                }} 
                            />
                        </div>
                        <div className='flex justify-between items-center gap-4'>
                            <div className='flex items-center gap-2'>
                                <span className='text-[10px] px-2 py-0.5 bg-[#638388] rounded-full text-white'>1</span>
                                <span className='text-white text-[14px]'>Student</span>
                            </div>
                            <p className='text-[#BDF6FF]'>$400 (8%)</p>
                        </div>
                        <div className='flex justify-between items-center gap-4'>
                            <div className='flex items-center gap-2'>
                                <span className='text-[10px] px-2 py-0.5 bg-[#638388] rounded-full text-white'>2</span>
                                <span className='text-white text-[14px]'>Practitioner</span>
                            </div>
                            <p className='text-[#BDF6FF]'>$400 (8%)</p>
                        </div>
                        <div className='flex justify-between items-center gap-4'>
                            <div className='flex items-center gap-2'>
                                <span className='text-[10px] px-2 py-0.5 bg-[#638388] rounded-full text-white'>3</span>
                                <span className='text-white text-[14px]'>Master</span>
                            </div>
                            <p className='text-[#BDF6FF]'>-</p>
                        </div>
                    </div>
                    
                    <div className='space-y-2 border-b border-b-[#072B33] py-4'>
                        <div className="flex items-center gap-2">
                            <p className='text-[#aeaeae] text-[14px]'>Maximum Loss</p>
                            <ButtonInfo 
                                onClick={() => {
                                    setInformation(planInformation?.maximum_loss ?? []);
                                    onOpen();
                                }} 
                            />
                        </div>
                        <div className='flex justify-between items-center gap-4'>
                            <p className='text-white text-[14px]'>Student, Practitioner, Master</p>
                            <p className='text-[#BDF6FF]'>10%</p>
                        </div>
                    </div>

                    <div className='space-y-2 border-b border-b-[#072B33] py-4'>
                        <div className="flex items-center gap-2">
                            <p className='text-[#aeaeae] text-[14px]'>Maximum Daily Loss</p>
                            <ButtonInfo 
                                onClick={() => {
                                    setInformation(planInformation?.maximum_daily_loss ?? []);
                                    onOpen();
                                }} 
                            />
                        </div>
                        <div className='flex justify-between items-center gap-4'>
                            <p className='text-white text-[14px]'>Student, Practitioner, Master</p>
                            <p className='text-[#BDF6FF]'>5%</p>
                        </div>
                    </div>

                    <div className='space-y-2 border-b border-b-[#072B33] py-4'>
                        <div className="flex items-center gap-2">
                            <p className='text-[#aeaeae] text-[14px]'>Minimum Trading Days</p>
                            <ButtonInfo 
                                onClick={() => {
                                    setInformation(planInformation?.minimum_trading_days ?? []);
                                    onOpen();
                                }} 
                            />
                        </div>
                        <div className='flex justify-between items-center gap-4'>
                            <p className='text-white text-[14px]'>Student, Practitioner, Master</p>
                            <p className='text-[#BDF6FF]'>3 days</p>
                        </div>
                    </div>

                    <div className='space-y-2 border-b border-b-[#072B33] py-4'>
                        <div className="flex items-center gap-2">
                            <p className='text-[#aeaeae] text-[14px]'>Leverage</p>
                            <ButtonInfo 
                                onClick={() => {
                                    setInformation(planInformation?.leverage ?? []);
                                    onOpen();
                                }} 
                            />
                        </div>
                        <div className='flex justify-between items-center gap-4'>
                            <p className='text-white text-[14px]'>Student, Practitioner, Master</p>
                            <p className='text-[#BDF6FF]'>1:100</p>
                        </div>
                    </div>

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