import Link from 'next/link'
import React from 'react'
import { Image } from '..'

const ExploreAffiliate = () => {
    return (
        <div className=''>
            <h2 className='text-4xl text-white font-bold text-center'>Explore the affiliate tools from Ace Trader?</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14'>
                <div className='flex flex-col justify-between gap-4 h-[180px]'>
                    <div className='bg-[#06333D] p-8 rounded-lg shadow-xl'>
                        <p className='text-xl font-bold text-white mb-2'>Sophisticated Tools</p>
                        <ul className='list-disc text-[#BDF6FF] space-y-1 ml-4'>
                            <li>Marketing Graphics</li>
                            <li>Access to our affiliate Discord group</li>
                            <li>Learning Video Package</li>
                        </ul>
                    </div>
                    <div className='bg-[#06333D] p-8 rounded-lg shadow-xl'>
                        <div className="flex justify-between items-end gap-4">
                            <div>
                                <p className='text-xl text-white font-bold'>Tier 1</p>
                                <p className='text-[#BDF6FF]'>Referral</p>
                                <p className='text-[#BDF6FF]'>Produce</p>
                            </div>
                            <p className='text-[40px] sm:text-[50px] text-[#BDF6FF]'>5%</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between gap-4'>
                    <div className='bg-[#06333D] p-8 rounded-lg shadow-xl h-[180px]'>
                        <p className='text-xl font-bold text-white mb-2'>Exclusive Bonus</p>
                        <ul className='list-disc text-[#BDF6FF] space-y-1 ml-4'>
                            <li>365-Day Cookies</li>
                            <li>Insights and detailed reports</li>
                            <li>Promotion in progress</li>
                        </ul>
                    </div>
                    <div className='bg-[#06333D] p-8 rounded-lg shadow-xl'>
                        <div className="flex justify-between items-end gap-4">
                            <div>
                                <p className='text-xl text-white font-bold'>Tier 2</p>
                                <p className='text-[#BDF6FF]'>Referral</p>
                                <p className='text-[#BDF6FF]'>Produce</p>
                            </div>
                            <p className='text-[40px] sm:text-[50px] text-[#BDF6FF]'>8%</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-between gap-4'>
                    <div className='bg-[#06333D] p-8 rounded-lg shadow-xl h-[180px]'>
                        <p className='text-xl font-bold text-white mb-2'>Competitive Commission</p>
                        <p className='text-[#BDF6FF]'>Earn up to 10% commission on every sale. Maximize your earnings with every referral.</p>
                    </div>
                    <div className='bg-[#06333D] p-8 rounded-lg shadow-xl'>
                        <div className="flex justify-between items-end gap-4">
                            <div>
                                <p className='text-xl text-white font-bold'>Tier 3</p>
                                <p className='text-[#BDF6FF]'>Referral</p>
                                <p className='text-[#BDF6FF]'>Produce</p>
                            </div>
                            <p className='text-[40px] sm:text-[50px] text-[#BDF6FF]'>10%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-24 space-y-6'>
                <p className='text-4xl text-white font-bold text-center'>Join our community</p>
                <p className='text-[#BDF6FF] text-center'>Our customer support team is ready to assist you throughout your trading journey.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href={'https://dashboard.a-trader.com/en/sign-in'} className='text-white border border-white py-2 px-4 rounded-full'>Affiliate Login</Link>
                    <Link href={'https://dashboard.a-trader.com/en/sign-in'} className='text-[#072B33] bg-[#05CBE9] py-2 px-4 rounded-full'>Sign Up to Become an Affiliate</Link>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-[100px] items-center">
                <div className='p-2 rounded-xl bg-[#06333D] shrink-0 h-fit'>
                    <Image src='/images/guard.png' alt='' width={100} height={100} className='w-[50px]' />
                </div>
                <p className='text-[#3AA7B8] text-center md:text-left'> <span className='font-bold'>Ace-Trader</span> is provided by Forest Park FX LTD. Forest Park FX LTD offers fee-based simulated trading assessments for Potential Traders. All funding assessments are provided by Forest Park FX LTD and all assessment fees are paid to Forest Park FX LTD. If you qualify for a Funded Account, you will be required to enter into a Trader Agreement with Forest Park FX LTD. Forest Park FX LTD does not provide any trading education or other services.</p>
            </div>
        </div>
    )
}

export default ExploreAffiliate