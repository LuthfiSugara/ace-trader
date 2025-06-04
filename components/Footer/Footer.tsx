import React from 'react'
import { Image } from '..'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='bg-[#031F25] mt-[100px]'>
            <div className="max-w-[1400px] flex flex-col-reverse md:flex-row justify-between gap-12 md:gap-4 px-[40px] py-[60px]">
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
                        <Link href='' className='text-[#3AA7B8]'>FAQ</Link>
                        <Link href='' className='text-[#3AA7B8]'>Trading Guide</Link>
                        <Link href='' className='text-[#3AA7B8]'>Risk Disclosure</Link>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='text-white font-bold'>Resources</p>
                        <Link href='' className='text-[#3AA7B8]'>Privacy Policy</Link>
                        <Link href='' className='text-[#3AA7B8]'>Terms & Condition</Link>
                        <Link href='' className='text-[#3AA7B8]'>Documentation</Link>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='text-white font-bold'>Contact Us</p>
                        <Link href='' className='text-[#3AA7B8]'>Email</Link>
                        <Link href='' className='text-[#3AA7B8]'>Live Chat</Link>
                        <Link href='' className='text-[#3AA7B8]'>WhatsApp</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer