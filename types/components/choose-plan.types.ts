export interface BenefitProps {
    name: string;
    info: string;
    data: Array<string>;
}

export interface BenefitsProps {
    name: string;
    info?: Array<string>;
    data: Array<BenefitProps>;
}

export interface DataPlanProps {
    plan: string;
    product_type: string;
    rule_area:Array<string>;
    benefits: Array<BenefitsProps>;
}