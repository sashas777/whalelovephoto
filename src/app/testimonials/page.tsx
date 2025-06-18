import TestimonialQuote from "@/components/testimonials/TestimonialQuote";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import {testimonialsData} from "@/utils/constants";
import ContactFormSection from "@/components/ContactFormSection";

export default function TestimonialsPage() {
    return (
        <>
            <TestimonialQuote/>
            <section id="all-testimonials" className="px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    {testimonialsData.map((testimonial) => (
                        <TestimonialSection key={testimonial.id} testimonial={testimonial}/>
                    ))}
                </div>
            </section>
            <ContactFormSection/>
        </>
    );
}