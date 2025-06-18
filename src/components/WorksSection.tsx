import Image from 'next/image';
import Link from 'next/link';
import { workItems } from "@/utils/constants";

export default function WorksSection() {
    return (
        <section id="works" className="py-12 md:py-20 px-4 bg-white">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {workItems.map((item) => (
                        <div key={item.id} className="group relative flex flex-col items-center">
                            {/* Link Wrapper */}
                            <Link href={item.link} className="block w-full overflow-hidden rounded-lg shadow-lg relative aspect-[3/4]">
                                {/* Image with hover effect */}
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill // Fills the parent div
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    style={{ objectFit: 'cover' }}
                                    className="transition-opacity duration-300 group-hover:opacity-75"
                                />
                            </Link>
                            {/* Text below the image */}
                            <h3 className="mt-4 text-lg font-light text-gray-800 uppercase tracking-widest text-center">
                                {item.name.toUpperCase()}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
