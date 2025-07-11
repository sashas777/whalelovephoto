import Image from 'next/image';
import {Testimonial} from "@/utils/constants";

interface TestimonialSectionProps {
    testimonial: Testimonial;
}

export default function TestimonialSection({ testimonial }: TestimonialSectionProps) {
    return (
        <section id="testimonials" className="py-12 md:py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                {/* Directly render the single testimonial */}
                <div
                    key={testimonial.id}
                    className={`flex flex-col items-start justify-center gap-8 md:gap-12 mb-16 last:mb-0
                      ${testimonial.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                    {/* Image Column */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-[500px] h-[500px] md:h-[600px] overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src={testimonial.imageSrc}
                                alt={`Testimonial from ${testimonial.author}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 500px"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    {/* Text Content Column */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h3 className="text-3xl md:text-4xl font-satisfy font-light italic text-gray-800 leading-snug mb-6">
                            ”{testimonial.quote}”
                        </h3>
                        {testimonial.body.map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-base text-gray-700 leading-relaxed mb-4 font-light">
                                {paragraph}
                            </p>
                        ))}
                        <p className="text-sm font-normal text-gray-600 uppercase tracking-widest mt-6">
                            {testimonial.author}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
