'use client'; // This component uses client-side hooks from react-parallax
import { Parallax } from 'react-parallax';
import Image from 'next/image';

export default function Quote() {
    return (
        <section className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Parallax component from react-parallax */}
            <Parallax
                bgImage="/images/quote.jpg"
                bgImageAlt="Baby feet"
                strength={300}
                className="w-full h-full absolute inset-0 z-0"
            >
                {/* Placeholder for the image in the background (hidden but ensures Next.js optimizes it) */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/quote.jpg"
                        alt="Baby feet"
                        width={1920}
                        height={1280}
                        className="hidden"
                        priority
                    />
                </div>

                {/* Overlay to darken the image slightly and improve text readability */}
                <div className="absolute inset-0 opacity-50 z-10"></div>

                {/* Quote Content - Centered and white */}
                <div className="relative inset-0 z-20 flex items-center justify-center">
                    <p className="text-white text-xl md:text-3xl lg:text-4xl font-light leading-relaxed
                       bg-black opacity-50 rounded-lg p-4 mt-50 md:p-6 text-center max-w-4xl mx-auto">
                        &quot;Since I was a little girl, I dreamt of my perfect day. And now, I get to capture everyone’s
                        special day.&quot;
                    </p>
                </div>
            </Parallax>
        </section>
    );
}
