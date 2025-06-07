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
    [information, setInformation] = useState<string[]>([""]);
    
    // const infoPlan = {
    //     "profit_target": [
    //         "To prove your trading skills, you have to reach the profit target after closing all your trades without violating any trading rules within the given trading period."
    //     ],
    //     "maximum_loss": [
    //         "The Maximum Loss Limit is the amount your equity or balance can't go below. This rule is set to 10% of the initial account size. For example, if you have a $100.000 account and the Maximum Loss Limit is 10%, your equity or balance can't go below $90.000 at any moment."
    //     ],
    //     "maximum_daily_loss": [
    //         "The Maximum Daily Loss is the amount you are allowed to lose every day.",
    //         "<br />",
    //         "For the purpose of this rule, the higher value between equity and balance will be used. This rule is set as a % of the starting equity or balance of every day. The rule states that the equity of the day, which is the result of the currently floating PnL (Profit and Loss) in sum with all closed positions of that day must not hit the Maximum Daily Loss Limit.",
    //         "<br />",
    //         "Example:",
    //         "You have a master account. At the start of day 5, your account balance is $105.000 and your equity is $107.000. The Daily Loss Limit is 5% from the starting equity for this example, this means that your equity on day 5 can't go lower than: Maximum Daily loss = $107.000 starting equity balance * 5% Daily Loss Limit = $5.350 Daily Loss Limit. $107.000 starting equity balance on day 5 - $5.350 Daily Loss Limit= $101.650 If your equity goes below $101.650 at any certain moment of time on day 5 your account will be closed."
    //     ],
    //     "minimum_trading_days": [
    //         "During each stage of our evaluation, there are a minimum of 3 trading days. A day is counted as a trading day if at least one trade is executed. Holding a trade over multiple days will not count as multiple trading days.",
    //         "<br />",
    //         "Note:",
    //         "If you reach the profit target before completing the 3 minimum trading days, it is allowed to execute 0.01 lot trades on the remaining days."
    //     ],
    //     "leverage": [
    //         "Trade with up to 1:100 leverage with RAW Spreads. There is a different leverage applied for different types of financial instruments.FX 1:100, Indices 1:20, Metals 1:30, Energies 1:10 & Crypto 1:2."
    //     ]
    // }

    useEffect(() => {
        fetch('/data/info-plan.json')
        .then(res => res.json())
        .then(data => setPlanInformation(data));
    }, []);

    console.log('planInformation : ', planInformation);


    // const plans = ['standard', 'crypto', 'instant'],
    // accountBalance = [5, 10, 25, 50, 100, 250, 450],
    // productType = ['1-step', '2-step'],
    // platform = ['ctrader', 'dxtrade', 'match-trader'];

    return (
        <div className='target-element mt-[100px] space-y-8' id='plans'>
            <h2 className='text-[30px] lg:text-[40px] text-white font-bold text-center'>Choose the plan that fits you!</h2>

            <div className='flex flex-wrap gap-[32px] bg-[#06333D] rounded-xl p-[32px]'>
                <div className='space-y-3'>
                    <p className='text-white font-semibold'>Plan</p>
                    <div className='flex flex-wrap gap-4'>
                        {}
                        <Button className='bg-[#05CBE966] text-white border border-[#3AA7B8] p-[16px] rounded-[16px] hover:bg-[#05CBE966] hover:text-white'>Standard</Button>
                        <Button className='text-[#BDF6FF] border border-[#3AA7B8] p-[16px] rounded-[16px] hover:bg-[#05CBE966] hover:text-white'>Crypto</Button>
                        <Button className='text-[#BDF6FF] border border-[#3AA7B8] p-[16px] rounded-[16px] hover:bg-[#05CBE966] hover:text-white'>Instant</Button>
                    </div>
                </div>
                <div className='space-y-3'>
                    <p className='text-white font-semibold'>Account Balance</p>
                    <div className='flex flex-wrap gap-4'>
                        <Button className='bg-[#05CBE966] text-white border border-[#3AA7B8] p-[16px] rounded-[16px] hover:bg-[#05CBE966] hover:text-white'>5K</Button>
                        <Button className='text-[#BDF6FF] border border-[#3AA7B8] p-[16px] rounded-[16px] hover:bg-[#05CBE966] hover:text-white'>10K</Button>
                        <Button className='text-[#BDF6FF] border border-[#3AA7B8] p-[16px] rounded-[16px] hover:bg-[#05CBE966] hover:text-white'>25K</Button>
                        <Button className='text-[#BDF6FF] border border-[#3AA7B8] p-[16px] rounded-[16px] hover:bg-[#05CBE966] hover:text-white'>50K</Button>
                        <Button className='text-[#BDF6FF] border border-[#3AA7B8] p-[16px] rounded-[16px] hover:bg-[#05CBE966] hover:text-white'>100K</Button>
                        <Button className='text-[#BDF6FF] border border-[#3AA7B8] p-[16px] rounded-[16px] hover:bg-[#05CBE966] hover:text-white'>250K</Button>
                        <Button className='text-[#BDF6FF] border border-[#3AA7B8] p-[16px] rounded-[16px] hover:bg-[#05CBE966] hover:text-white'>450K</Button>
                    </div>
                </div>
                <div className='space-y-3'>
                    <p className='text-white font-semibold'>Product Type</p>
                    <div className='flex flex-wrap gap-4'>
                        <Button className='bg-[#05CBE966] text-white border border-[#3AA7B8] p-[16px] rounded-[16px] hover:bg-[#05CBE966] hover:text-white'>1-Step</Button>
                        <Button className='text-[#BDF6FF] border border-[#3AA7B8] p-[16px] rounded-[16px] hover:bg-[#05CBE966] hover:text-white'>2-Step</Button>
                    </div>
                </div>
                <div className='space-y-3'>
                    <p className='text-white font-semibold'>Platform</p>
                    <div className='flex flex-wrap gap-4'>
                        <Button className='bg-[#05CBE966] text-white border border-[#3AA7B8] p-[16px] rounded-[16px] hover:bg-[#05CBE966] hover:text-white'>
                            <Image src='/icons/Ctrader.png' alt='ctrader' width={100} height={100} className='w-[100px]' />
                        </Button>
                        <Button className='text-[#BDF6FF] border border-[#3AA7B8] p-[16px] rounded-[16px] hover:bg-[#05CBE966] hover:text-white'>
                            <Image src='/icons/dxtrade.png' alt='dxtrade' width={100} height={100} className='w-[100px]' />
                        </Button>
                        <Button className='text-[#BDF6FF] border border-[#3AA7B8] p-[16px] rounded-[16px] hover:bg-[#05CBE966] hover:text-white'>
                            <Image src='/icons/match-trader.png' alt='match trader' width={100} height={100} className='w-[100px]' />
                        </Button>
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