import { HeroAboutUs } from '@/components'
import PeopleBehindAceTrader from '@/components/PeopleBehindAceTrader/PeopleBehindAceTrader'
import WhatWeStandFor from '@/components/WhatWeStandFor/WhatWeStandFor'
import React from 'react'

const Index = () => {
    return (
        <div>
            <div className="pt-[100px] lg:pt-[150px] pb-[50px]" style={{background: 'linear-gradient(180deg, #118C8A 0%, #072B33 80.29%)'}}>
                <div className="max-w-[1400px] mx-auto py-[20px] lg:py-[0px] px-8 lg:px-[40px]">
                    <HeroAboutUs />
                </div>
            </div>
            <div className='max-w-[1400px] mx-auto px-8 lg:px-[40px]'>
                <PeopleBehindAceTrader />
                <WhatWeStandFor />
            </div>
        </div>
    )
}

export default Index