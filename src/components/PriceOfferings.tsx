import Image from 'next/image';
import Link from 'next/link';
import { pricingPlans } from "@/utils/constants";

type PricingPlanKeys = keyof typeof pricingPlans;

interface PriceOfferingsProps {
    pricingPlanKey: PricingPlanKeys;
}

export default function PriceOfferings({ pricingPlanKey }: PriceOfferingsProps) {
    const currentOffering = pricingPlans[pricingPlanKey];

    if (!currentOffering) {
        return (
            <section id="price-offerings" className="py-12 md:py-20 px-4 bg-white">
                <div className="container mx-auto max-w-6xl text-center">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-10 uppercase tracking-wider">
                        No Pricing Plans Found
                    </h2>
                    <p className="text-gray-600">Please select a valid pricing plan category.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="price-offerings" className="py-12 md:py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-10 text-center uppercase tracking-wider">
                    {currentOffering.sectionName}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {currentOffering.plans.map((plan) => (
                        <div key={plan.id}
                             className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden">
                            {/* Image Section */}
                            <div className="relative w-full h-80 overflow-hidden">
                                <Image
                                    src={plan.imageSrc}
                                    alt={`Pricing Plan ${plan.id}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    style={{objectFit: 'cover'}}
                                    className="transition-transform duration-300 hover:scale-105"
                                />
                            </div>

                            {/* Price and Details Section */}
                            <div
                                className="w-full text-center py-6 px-4 bg-gray-50 flex flex-col items-center flex-grow">
                                <p className="text-3xl font-light text-gray-800 mb-4">{plan.name.toUpperCase()}</p>
                                <p className="text-3xl font-light text-gray-800 mb-4">{plan.price}</p>
                                {/* Changed width: removed max-w-[200px] */}
                                <ul className="text-sm text-gray-700 leading-relaxed list-none p-0 m-0 text-left w-full px-4">
                                    {plan.details.map((detail, index) => (
                                        <li key={index} className="mb-1 last:mb-0">
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Book Now Button */}
                            <div className="w-full p-4">
                                <Link
                                    href="/contact"
                                    className="block w-full bg-black text-white text-center py-4 rounded-full uppercase text-sm font-normal tracking-widest
                                   hover:bg-gray-700 transition-colors duration-300"
                                >
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex w-full items-center text-gray-700 bg-white py-2 text-center overflow-hidden">
                    **PRICES DO NOT INCLUDE STUDIO BOOKINGS AND ANY APPLICABL﻿E TRAVEL FEES (IF APPLIED). (MOST OF THE
                    SESSIONS HAPPENS IN HOME OR OUTDOOR.)
                </div>
            </div>
        </section>
    );
}
