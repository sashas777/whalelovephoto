import Image from 'next/image';
import ContactFormSection from '@/components/ContactFormSection';
import ContactIcons from "@/components/ContactIcons";

export default function ContactPage() {
    return (
        <div className="bg-white">
            {/* Top Section: Image on Left, Text on Right */}
            <section className="py-12 md:py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                        {/* Left Column: Image */}
                        <div className="w-full flex justify-center order-2 md:order-1">
                            <div
                                className="relative w-full h-[300px] md:h-[600px] overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src="/images/about.jpg"
                                    alt="Ekaterina Ferrante | Create Timeless Memories Today"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    style={{objectFit: 'cover'}}
                                />
                            </div>
                        </div>
                        {/* Right Column: Contact Text */}
                        <div className="w-full text-center md:text-left order-1 md:order-2">
                            <p className="text-base text-gray-700 leading-relaxed mb-4 font-light">
                                If you love my style and my vision of this world and you want to get in touch with me,
                                please go to the contact form and send me a message or just email me:
                            </p>
                            <div className="flex items-center justify-center md:justify-start space-x-2">
                                <ContactIcons/>
                            </div>
                            <ContactFormSection/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
