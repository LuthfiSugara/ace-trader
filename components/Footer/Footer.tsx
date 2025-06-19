import React from 'react'
import { Image } from '..'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='bg-[#031F25] mt-[100px]'>
            <div className="max-w-[1400px] flex flex-col-reverse md:flex-row justify-between gap-12 md:gap-4 px-[40px] py-[60px] mx-auto">
                <div className='space-y-[20px] my-auto flex flex-col items-center justify-center sm::justify-between gap-8'>
                    <Image src='/images/logo.png' alt='logo' width={100} height={100} className='w-[240px] my-auto' />
                    <div className="flex justify-center items-center gap-[28px]">
                        <Link href=''>
                            <Image src='/icons/facebook.png' alt='facebook' width={100} height={100} className='w-[24px]' />
                        </Link>
                        <Link href=''>
                            <Image src='/icons/linkedin.png' alt='linkedin' width={100} height={100} className='w-[24px]' />
                        </Link>
                        <Link href=''>
                            <Image src='/icons/youtube.png' alt='youtube' width={100} height={100} className='w-[24px]' />
                        </Link>
                        <Link href=''>
                            <Image src='/icons/instagram.png' alt='instagram' width={100} height={100} className='w-[24px]' />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-wrap gap-8 mx-auto md:mx-0">
                    <div className='flex flex-col gap-6'>
                        <p className='text-white font-bold'>Quick Link</p>
                        <Link href='faqs' className='text-[#3AA7B8]'>FAQs</Link>
                        <Link href={process.env.APP_URL + '#plans'} className='text-[#3AA7B8]'>Plans</Link>
                        <Link href={process.env.APP_URL + '#contact'} className='text-[#3AA7B8]'>Contact Us</Link>
                        <Link href={'about-us'} className='text-[#3AA7B8]'>About Us</Link>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='text-white font-bold'>Resources</p>
                        <Link href='' className='text-[#3AA7B8]'>Terms and Conditions</Link>
                        <Link href='' className='text-[#3AA7B8]'>Refund Policy</Link>
                        <Link href='' className='text-[#3AA7B8]'>Privacy Policy</Link>
                        <Link href='' className='text-[#3AA7B8]'>Cookie Policy</Link>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='text-white font-bold'>Contact Us</p>
                        <Link href='mailto:support@a-trader.com' className='text-[#3AA7B8]'>Email</Link>
                        <Link href='#' className='text-[#3AA7B8]'>Live Chat</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer