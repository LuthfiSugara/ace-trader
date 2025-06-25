import { ChoosePlan, ContactUs, Hero, WhyAceTrader, } from "@/components";
import EverythingYouNeedToKnow from "@/components/EverythingYouNeedToKnow/EverythingYouNeedToKnow";
import WhatTradersSaying from "@/components/WhatTradersSaying/WhatTradersSaying";


export default function Home() {

  return (
    <div>
      <Hero />
      <div className="max-w-[1400px] mx-auto px-8 md:px-[40px] lg:px-[60px]">
        <WhyAceTrader />
        <ChoosePlan />
        {/* <WhatTradersSaying /> */}
        <EverythingYouNeedToKnow />
        <ContactUs />
      </div>
    </div>
  );
}
