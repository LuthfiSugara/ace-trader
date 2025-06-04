import { ChoosePlan, Hero, WhyAceTrader, } from "@/components";


export default function Home() {

  
  return (
    <div>
      <Hero />
      <div className="max-w-[1400px] mx-auto px-[40px] lg:px-[60px]">
        <WhyAceTrader />
        <ChoosePlan />
      </div>
    </div>
  );
}
