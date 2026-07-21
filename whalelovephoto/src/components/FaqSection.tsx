import { pricingPlans } from "@/utils/constants";

type PricingPlanKeys = keyof typeof pricingPlans;

interface FaqSectionProps {
    pricingPlanKey: PricingPlanKeys;
}

export default function FaqSection({ pricingPlanKey }: FaqSectionProps) {
    const currentFaq = pricingPlans[pricingPlanKey]?.faq;

    if (!currentFaq || currentFaq.length === 0) {
        return (
            <section id="faq" className="py-12 md:py-20 px-4 bg-white">
                <div className="container mx-auto max-w-6xl text-center">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-10 uppercase tracking-wider">
                        FAQ
                    </h2>
                    <p className="text-gray-600">No frequently asked questions available for this offering yet.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="faq" className="py-12 md:py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* FAQ Title Column */}
                    <div className="md:col-span-1 text-center md:text-left">
                        <h2 className="text-4xl font-light text-gray-800 mb-6 uppercase tracking-wider">
                            FAQ
                        </h2>
                    </div>
                    {/* FAQ Items Column (3 columns for questions and answers) */}
                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentFaq.map((item, index) => (
                            <div key={index} className="flex flex-col text-center md:text-left">
                                <h3 className="text-lg md:text-xl font-normal text-gray-800 mb-3 leading-tight">
                                    {item.question}
                                </h3>
                                {item.answer.split('\n\n').map((paragraph, pIndex) => (
                                    <p key={pIndex} className="text-sm text-gray-700 leading-relaxed font-light mb-2 last:mb-0">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}