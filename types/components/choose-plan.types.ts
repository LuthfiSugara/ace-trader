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
    plan_id: number;
    product_type: string;
    product_type_id: number;
    rule_area:Array<RuleArea>;
    benefits: Array<BenefitsProps>;
}

export interface RuleArea {
    id: number;
    name: string;
}