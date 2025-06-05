import { ChoosePlan, Hero, WhyAceTrader, } from "@/components";
import WhatTradersSaying from "@/components/WhatTradersSaying/WhatTradersSaying";


export default function Home() {

  
  return (
    <div>
      <Hero />
      <div className="max-w-[1400px] mx-auto px-8 md:px-[40px] lg:px-[60px]">
        <WhyAceTrader />
        <ChoosePlan />
        <WhatTradersSaying />
      </div>
    </div>
  );
}
