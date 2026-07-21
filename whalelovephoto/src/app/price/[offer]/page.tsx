'use client';

import PriceOfferings from "@/components/PriceOfferings";
import FaqSection from "@/components/FaqSection";
import BookNowButton from "@/components/price/BookNowButton";
import { useParams } from 'next/navigation';
import NotFound from "@/app/not-found";
import { pricingPlans } from "@/utils/constants";

type PricingPlanKeys = keyof typeof pricingPlans;

export default function PricePage() {
    const {offer} = useParams();

    if (!offer || typeof offer !== "string") {
        return NotFound();
    }

    const transformedOfferKey = offer.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

    if (!(transformedOfferKey in pricingPlans)) {
        return NotFound();
    }

    const validPricingPlanKey = transformedOfferKey as PricingPlanKeys;

    return (
        <>
           <PriceOfferings pricingPlanKey={validPricingPlanKey}/>
            <FaqSection pricingPlanKey={validPricingPlanKey}/>
            <BookNowButton/>
        </>
    );
}

