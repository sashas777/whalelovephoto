import PriceOfferings from "@/components/PriceOfferings";
import { pricingPlans } from "@/utils/constants";

type PricingPlanKeys = keyof typeof pricingPlans;

export default function PricePage() {
    return (
        <>
            {Object.keys(pricingPlans).map((key) => (
                <PriceOfferings
                    key={key}
                    pricingPlanKey={key as PricingPlanKeys}
                />
            ))}
        </>
    );
}