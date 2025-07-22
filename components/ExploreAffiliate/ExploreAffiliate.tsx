'use client'

import Link from 'next/link'
import React from 'react'
import { Image } from '..'
import useTranslation from '@/hooks/useTranslation'
import parse from 'html-react-parser';

const ExploreAffiliate = () => {
    const { translation } = useTranslation();


    return (
        <div className=''>
            <h2 className='text-4xl text-white font-bold text-center'>{translation('affiliate.explore.title')}</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14'>
                <div className='flex flex-col justify-between gap-4 h-[180px]'>
                    <div className='bg-[#06333D] p-8 rounded-lg shadow-xl'>
                        <p className='text-xl font-bold text-white mb-2'>{translation('affiliate.explore.tool.one')}</p>
                        <ul className='list-disc text-[#BDF6FF] space-y-1 ml-4'>
                            <li>{translation('affiliate.explore.tool.one.description.one')}</li>
                            <li>{translation('affiliate.explore.tool.one.description.two')}</li>
                            <li>{translation('affiliate.explore.tool.one.description.three')}</li>
                        </ul>
                    </div>
                    <div className='bg-[#06333D] p-8 rounded-lg shadow-xl'>
                        <div className="flex justify-between items-end gap-4">
                            <div>
                                <p className='text-xl text-white font-bold'>{translation('affiliate.explore.tier.one')}</p>
                                <p className='text-[#BDF6FF]'>{translation('affiliate.explore.tier.referral')}</p>
                                <p className='text-[#BDF6FF]'>{translation('affiliate.explore.tier.produce')}</p>
                            </div>
                            <p className='text-[40px] sm:text-[50px] text-[#BDF6FF]'>5%</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between gap-4'>
                    <div className='bg-[#06333D] p-8 rounded-lg shadow-xl h-[180px]'>
                        <p className='text-xl font-bold text-white mb-2'>{translation('affiliate.explore.tool.two')}</p>
                        <ul className='list-disc text-[#BDF6FF] space-y-1 ml-4'>
                            <li>{translation('affiliate.explore.tool.two.description.one')}</li>
                            <li>{translation('affiliate.explore.tool.two.description.two')}</li>
                            <li>{translation('affiliate.explore.tool.two.description.three')}</li>
                        </ul>
                    </div>
                    <div className='bg-[#06333D] p-8 rounded-lg shadow-xl'>
                        <div className="flex justify-between items-end gap-4">
                            <div>
                                <p className='text-xl text-white font-bold'>{translation('affiliate.explore.tier.two')}</p>
                                <p className='text-[#BDF6FF]'>{translation('affiliate.explore.tier.referral')}</p>
                                <p className='text-[#BDF6FF]'>{translation('affiliate.explore.tier.produce')}</p>
                            </div>
                            <p className='text-[40px] sm:text-[50px] text-[#BDF6FF]'>8%</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-between gap-4'>
                    <div className='bg-[#06333D] p-8 rounded-lg shadow-xl h-[180px]'>
                        <p className='text-xl font-bold text-white mb-2'>{translation('affiliate.explore.tool.three')}</p>
                        <p className='text-[#BDF6FF]'>{translation('affiliate.explore.tool.three')}</p>
                    </div>
                    <div className='bg-[#06333D] p-8 rounded-lg shadow-xl'>
                        <div className="flex justify-between items-end gap-4">
                            <div>
                                <p className='text-xl text-white font-bold'>{translation('affiliate.explore.tier.three')}</p>
                                <p className='text-[#BDF6FF]'>{translation('affiliate.explore.tier.referral')}</p>
                                <p className='text-[#BDF6FF]'>{translation('affiliate.explore.tier.produce')}</p>
                            </div>
                            <p className='text-[40px] sm:text-[50px] text-[#BDF6FF]'>10%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-24 space-y-6'>
                <p className='text-4xl text-white font-bold text-center'>{translation('affiliate.explore.community.join')}</p>
                <p className='text-[#BDF6FF] text-center'>{translation('affiliate.explore.community.join.description')}</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href={'https://dashboard.a-trader.com/en/sign-in'} className='text-white border border-white py-2 px-4 rounded-full'>{translation('affiliate.btn.login')}</Link>
                    <Link href={'https://dashboard.a-trader.com/en/sign-up'} className='text-[#072B33] bg-[#05CBE9] py-2 px-4 rounded-full'>{translation('affiliate.btn.signup')}</Link>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-[100px] items-center">
                <div className='p-2 rounded-xl bg-[#06333D] shrink-0 h-fit'>
                    <Image src='/images/guard.png' alt='' width={100} height={100} className='w-[50px]' />
                </div>
                <p className='text-[#3AA7B8] text-center md:text-left'>{parse(translation('global.footer.description'))}</p>
            </div>
        </div>
    )
}

export default ExploreAffiliate
