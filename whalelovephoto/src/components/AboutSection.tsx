import Image from 'next/image';

export default function AboutSection() {
  return (
      <section id="about-me" className="pt-12 md:pt-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column: Image */}
            <div className="order-2 md:order-1 flex justify-center w-full">
              <div className="relative w-full h-[300px] md:h-[600px] overflow-hidden rounded-lg shadow-lg">
                <Image
                    src="/images/about.jpg"
                    alt="Ekaterina Ferrante | Create Timeless Memories Today"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            {/* Right Column: Text Content */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <p className="text-sm uppercase text-gray-600 mb-2 font-light tracking-wider">A FEW WORDS ABOUT MYSELF</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6 leading-tight">
                Hi! I&apos;m Ekaterina Ferrante
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4 font-light">
                I am a photographer, certified doula, and lifelong baby enthusiast with over 13 years of experience
                capturing the beautiful journey from bump to baby and beyond.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4 font-light">
                Before I picked up a camera professionally, I worked as a newborn nurse and nanny. I would often take
                photos of the babies in my care to share with their parents—simple snapshots meant to reassure them
                their little one was safe, happy, and loved. The parents were always amazed and would ask if I was a
                photographer. I’d smile and say no, that it was just a hobby. But deep down, I knew it was something
                more.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-6 font-light">
                Now, I’m living my dream—combining my love for babies with my passion for photography.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-6 font-light">
                Photography, for me, isn’t just about pictures. It’s about preserving the tiny details, fleeting moments, and raw emotions that define your family’s story. From soft sleepy smiles to chubby little toes, I pour my heart into every image.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-6 font-light">
                Whether you&apos;re preparing for your baby&apos;s arrival or celebrating their first year, I’m honored to help you tell your story with love and intention.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
