'use client'

import useTranslation from '@/hooks/useTranslation';
import { Image } from '..';

const Hero = () => {
    const { translation } = useTranslation();

    return (
        <div className="pt-[50px] lg:pt-[25px] pb-[50px]" style={{background: 'linear-gradient(180deg, #118C8A 0%, #072B33 80.29%)'}}>
            <div className="max-w-[1400px] mx-auto py-[20px] lg:py-[60px] px-8 lg:px-[40px] grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="md:col-span-3 space-y-[32px] my-auto">
                    <h2 className="text-[40px] lg:text-[56px] leading-[50px] lg:leading-[72px] font-bold text-white text-center sm:text-start">{translation('home.hero.title')}</h2>
                    <p className="text-[#BDF6FF] text-center sm:text-start">{translation('home.hero.description')}</p>
                    <div className="flex flex-col sm:flex-row gap-4"> 
                        <a href="#plans" className="w-full sm:w-auto bg-[#05CBE9] text-[#072B33] text-center py-2 px-4 rounded-full self-center">{translation('home.hero.btn.start.challenge')}</a>
                        <a href="about-us" className="w-full sm:w-auto border-[2px] border-white text-center rounded-full py-2 px-4 text-white self-center">{translation('home.hero.btn.learn.more')}</a>
                    </div>
                </div>
                <div className="md:col-span-2 order-first md:order-none flex justify-end">
                    <Image src='/images/Banner.png' alt="hero" width={800} height={800} className="w-[100%]" />
                </div>
            </div>
        </div>
    )
}

export default Hero