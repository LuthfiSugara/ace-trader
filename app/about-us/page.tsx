import { HeroAboutUs } from '@/components'
import React from 'react'

const Index = () => {
    return (
        <div className="pt-[100px] lg:pt-[125px] pb-[50px]" style={{background: 'linear-gradient(180deg, #118C8A 0%, #072B33 80.29%)'}}>
            <div className="max-w-[1400px] mx-auto py-[20px] lg:py-[60px] px-8 lg:px-[40px]">
                <HeroAboutUs />
            </div>
        </div>
    )
}

export default Index