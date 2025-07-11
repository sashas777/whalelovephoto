import {FaFacebookF, FaInstagram, FaPinterestP} from "react-icons/fa";

export const instagramLink = 'https://www.instagram.com/whalelovephoto';
export const socialLinks = [
    { name: 'Instagram', href: instagramLink, icon: FaInstagram },
    { name: 'Facebook', href: 'https://www.facebook.com/whalelovephoto', icon: FaFacebookF },
    { name: 'Pinterest', href: 'https://www.pinterest.com/whalelovephoto/', icon: FaPinterestP },
];

export const phoneNumber = '+1 929-259-4187';
export const emailAddress = 'whalelovephoto@gmail.com';

interface MenuItem {
    name: string;
    href: string;
    subItems?: MenuItem[];
}

export const menuItems: MenuItem[] = [
    {
        name: 'work',
        href: '/work',
    },
    {
        name: 'price',
        href: '/price',
        subItems: [
            { name: 'Newborn', href: '/price/newborn' },
            { name: 'Cake Smash', href: '/price/cake-smash' },
            { name: 'Family', href: '/price/family' },
            { name: 'Maternity', href: '/price/maternity' },
        ],
    },
    { name: 'testimonials', href: '/testimonials' },
    { name: 'contact', href: '/contact' },
];

export const workItems = [
    {
        id: 1,
        name: 'Newborn',
        image: '/images/newborn.jpg',
        link: '/price/newborn',
    },
    {
        id: 2,
        name: 'Cake Smash',
        image: '/images/cake-smash.jpg',
        link: '/price/cake-smash',
    },
    {
        id: 3,
        name: 'Family',
        image: '/images/family.jpg',
        link: '/price/family',
    },
    {
        id: 4,
        name: 'Maternity',
        image: '/images/maternity.jpg',
        link: '/price/maternity',
    },
];

export const pricingPlans = {
    newborn: {
        sectionName: 'Newborn Photography Sessions',
        description: 'Newborn photography is not just about taking pictures — it’s about capturing the quiet magic of new life, the deep love of family, and the fleeting moments you’ll want to remember forever. These are more than images — they’re timeless keepsakes of your baby’s very first days.',
        plans: [
            {
                id: 1,
                name: 'Mini',
                imageSrc: '/images/newborn-mini.jpeg',
                price: '300 $',
                details: [
                    '- Photo session for 1 hour',
                    '- Helping with posing during the shoot',
                    '- 15 photos with enhanced correction (skin, details, etc.)',
                    '- All material from the session',
                    '- Delivered within 1-3 days (150+ files)',
                ],
            },
            {
                id: 2,
                name: 'Classic',
                imageSrc: '/images/newborn2.jpeg',
                price: '450 $',
                details: [
                    '- Photo session up to 2 hours',
                    '- Helping with posing during the shoot',
                    '- Newborn Props: wrap, blanket',
                    '- 25 photos with enhanced correction (skin, details, etc.)',
                    '- All material from the session',
                    '- Delivered within 1-3 days (200+ files)',
                ],
            },
            {
                id: 3,
                name: 'Premium',
                imageSrc: '/images/newborn3.jpeg',
                price: '600 $',
                details: [
                    '- Photo session for up to 3 hours',
                    '- Helping with posing during the shoot',
                    '- Newborn Props: wrap, blanket, and posing bean bag for safe and cozy sessions',
                    '- 35 photos with enhanced correction (skin, details, etc.)',
                    '- All material from the session',
                    '- Delivered within 1-3 days (typically 200+ files)',
                ],
            },
        ],
        faq: [
            {
                question: "When is the best time to book a newborn photography session?",
                answer: "The best time to reserve your newborn session is during your second or early third trimester to ensure availability. I usually photograph newborns within the first 5–14 days after birth, when babies are still very sleepy and naturally curled. That said, I’m flexible — I focus on connection more than perfect posing, and I believe beautiful moments can be captured at any stage.",
            },
            {
                question: "Do you provide props, outfits, and wraps for the newborn sessions?",
                answer: "Yes — while I focus mostly on natural, candid moments, I do have a small curated selection of soft, neutral wraps and a few simple accessories if you’d like them. But you’re never required to use anything — we can keep it completely organic, using your baby’s own onesie or just cozy blankets at home. The goal is to keep it personal and true to you.",
            },
            {
                question: "Can parents and siblings be included in the newborn photos?",
                answer: "Absolutely — I love photographing those first connections between baby and family. These early days are full of emotion, and your bond is what makes the images truly special. I often begin with family shots to help everyone settle in and feel at ease, especially little ones.",
            },
            {
                question: "How long does a typical newborn photoshoot last?",
                answer: "My sessions are calm and unrushed. A typical session lasts around 1 to 3 hours, allowing time for feeding, cuddling, and any breaks your baby may need. I follow your baby’s pace — the most meaningful photos come when everyone is relaxed and present.",
            },
            {
                question: "What if my baby is fussy or doesn't want to pose during the session?",
                answer: "That’s completely okay! I don’t rely on rigid posing — I work with your baby just as they are. If they need to feed, be held, or take a break, we go with the flow. I’ll gently guide the session using soothing techniques, but ultimately, I capture the real moments — even the imperfect ones are beautiful.",
            },
            {
                question: "When will I receive my newborn photo gallery?",
                answer: "You’ll receive a private online gallery for viewing about 1 - 3 business days after our session. Once you choose your favorite images, your fully edited, high-resolution photos will be delivered within ~1 week. Every image is hand-edited with care and love.",
            },
        ],
    },
    cakeSmash: {
        sectionName: 'First Birthday Cake Smash Photography',
        description: 'Celebrate your little one\'s milestone first birthday with a fun and memorable cake smash photoshoot! We offer custom-themed sessions to capture their joyous (and messy!) reactions.',
        plans: [
            {
                id: 1,
                name: 'Mini',
                imageSrc: '/images/cake-smash-mini.jpg',
                price: '300 $',
                details: [
                    '- 45 minutes photoshoot',
                    '- Simple backdrop setup (color of choice)',
                    '- 10 high-resolution retouched images',
                    '- Online gallery for selection',
                    '- Client provides the cake',
                ],
            },
            {
                id: 2,
                name: 'Classic',
                imageSrc: '/images/cake-smash-classic.jpg',
                price: '450 $',
                details: [
                    '- Up to 90 minute photoshoot',
                    '- Backdrop & decorations',
                    '- 25 high-resolution retouched images',
                    '- Includes pre-smash portraits, cake smash photos and photos with parents',
                    '- Online gallery & print release',
                    '- Client provides the cake',
                    '- Outfit guidance',
                ],
            },
            {
                id: 3,
                name: 'Premium',
                imageSrc: '/images/cake-smash-premium.jpg',
                price: '700 $',
                details: [
                    '- Up to 2,5 hours photoshoot',
                    '- Elaborate custom theme with premium props & decor',
                    '- 35 high-resolution retouched images',
                    '- Pre-smash portraits, multiple cake smash angles & splash bath',
                    '- Parents, siblings and other family members are Included in the photoshoot (optional)',
                    '- Online gallery, print release & custom USB',
                    '- Option to include custom cake (additional fee may apply)',
                    '- Wardrobe consultation',
                    '- Priority editing turnaround',
                ],
            },
        ],
        faq: [
            {
                question: "What is a cake smash photoshoot and why is it popular?",
                answer: "A cake smash photoshoot is a fun and memorable way to celebrate your baby's first birthday. It involves letting your little one explore, taste, and smash a cake, often followed by a delightful bubble bath. It's popular for capturing unique and joyful expressions during this significant milestone.",
            },
            {
                question: "Do I need to bring the cake for the session?",
                answer: "For most packages, clients are kindly asked to provide the smash cake due to dietary restrictions and personal preferences. We can offer recommendations for local bakers and guide you on the best type of cake and frosting for smashing.",
            },
            {
                question: "What should my baby wear for a cake smash session?",
                answer: "We recommend bringing a special outfit for the initial, 'clean' portraits, and then a comfortable, easy-to-clean outfit or just a diaper cover for the messy cake smash part. We can also discuss themes and provide wardrobe suggestions.",
            },
            {
                question: "How long does a cake smash photoshoot typically take?",
                answer: "Cake smash sessions usually last between 60 to 90 minutes. This allows time for warm-up photos, the main cake smashing fun, and a relaxing splash bath cleanup.",
            },
            {
                question: "What if my baby doesn't enjoy smashing the cake?",
                answer: "Every baby reacts differently! Some dive right in, others are more hesitant. We are patient and adaptable; we'll encourage them gently, use favorite snacks on the cake, or focus on their cute reactions. We ensure we capture adorable photos regardless of how much cake they actually smash.",
            },
            {
                question: "When should I book my cake smash session?",
                answer: "It's best to book your cake smash session 4-6 weeks before your baby's first birthday, especially if you plan to use the images for birthday invitations or party decor. This allows ample time for planning, the session, and editing.",
            },
        ],
    },
    family: {
        sectionName: 'Professional Family Photography',
        description: 'Creating timeless and authentic family portraits that tell your unique story. Our family photography sessions are designed to capture genuine connections, laughter, and love.',
        plans: [
            {
                id: 1,
                name: 'Mini',
                imageSrc: '/images/family.jpg',
                price: '300 $',
                details: [
                    '- 45 minute outdoor session at pre-determined location',
                    '- Ideal for quick updates or small families (up to 4 people)',
                    '- 12 professionally retouched digital images',
                    '- Private online gallery for selection',
                    '- Print release for personal use',
                    '- Limited poses, focused on candid interactions',
                ],
            },
            {
                id: 2,
                name: 'Classic',
                imageSrc: '/images/family-classic.jpg',
                price: '450 $',
                details: [
                    '- 60-90 minute outdoor or in-home session',
                    '- Suitable for families up to 6 people',
                    '- 20 professionally retouched digital images',
                    '- Mix of posed portraits & candid lifestyle shots',
                    '- Online gallery for selection & sharing',
                    '- Full print release',
                    '- Outfit guidance & location suggestions',
                ],
            },
            {
                id: 3,
                name: 'Premium',
                imageSrc: '/images/family-premium.jpg',
                price: '700 $',
                details: [
                    '- Up to 2 hours at multiple nearby locations (outdoor/in-home/studio)',
                    '- Perfect for large or extended families (up to 10 people)',
                    '- 30+ professionally retouched digital images',
                    '- Extensive range of posed, candid, and individual portraits',
                    '- Online gallery, custom USB drive & album credit',
                    '- Detailed styling consultation & outfit coordination',
                    '- Professional hair & makeup recommendations',
                    '- Priority editing turnaround & print consultation',
                ],
            },
        ],
        faq: [
            {
                question: "What should we wear for our family photoshoot?",
                answer: "We recommend coordinating colors rather than matching exactly. Opt for a cohesive color palette with neutrals, earthy tones, or soft pastels. Avoid overly busy patterns, large logos, or neon colors that can distract from the subjects. Comfort is key!",
            },
            {
                question: "Where do family photography sessions take place?",
                answer: "You have options! We offer outdoor sessions at scenic parks, beaches, or urban settings. In-home lifestyle sessions capture your family in your natural environment. Studio sessions are also available for a classic and controlled look. We'll help you choose the best location for your family's style.",
            },
            {
                question: "How do you keep children engaged and happy during the photoshoot?",
                answer: "We believe in making family sessions fun and relaxed! We use interactive prompts, games, and encourage natural interactions to capture genuine smiles and expressions. Breaks for snacks and play are always welcome, ensuring a positive experience for everyone.",
            },
            {
                question: "Can grandparents or extended family be included in our session?",
                answer: "Yes, absolutely! We love capturing multi-generational memories. Please let us know in advance if extended family will be joining, as it may influence the session length and package recommendation.",
            },
            {
                question: "What if the weather is bad on the day of our outdoor photoshoot?",
                answer: "For outdoor sessions, we monitor the weather closely. In case of rain or extreme conditions, we'll happily reschedule to the next available date or discuss an indoor alternative. Your comfort and the quality of your images are our priority.",
            },
            {
                question: "When will we receive our final family photos?",
                answer: "Your private online proofing gallery will be ready within 1-3 days for you to select your favorite images. Once your selections are made, the final retouched high-resolution digital images will be delivered within 1 week.",
            },
        ],
    },
    maternity: {
        sectionName: 'Elegant Maternity Photography',
        description: 'Celebrate the beauty of pregnancy with stunning maternity portraits. Our sessions capture the glow, anticipation, and unique bond between you and your growing baby.',
        plans: [
            {
                id: 1,
                name: 'Mini',
                imageSrc: 'https://place-hold.it/500x625/B0E0E6/000000',
                price: '300 $',
                details: [
                    '- 45 minute session (in-studio or single outdoor location)',
                    '- Ideal for solo portraits focusing on the bump',
                    '- 10 professionally retouched digital images',
                    '- Private online gallery for selection',
                    '- Print release for personal use',
                    '- Access to select maternity gowns from client closet',
                ],
            },
            {
                id: 2,
                name: 'Classic',
                imageSrc: 'https://place-hold.it/500x625/87CEFA/000000',
                price: '450 $',
                details: [
                    '- 60-90 minute session (in-studio or outdoor location)',
                    '- Includes partner and immediate children poses',
                    '- 20 professionally retouched digital images',
                    '- Online gallery for selection & sharing',
                    '- Full print release',
                    '- Access to full maternity gown client closet',
                    '- Styling guidance',
                ],
            },
            {
                id: 3,
                name: 'Premium',
                imageSrc: 'https://place-hold.it/500x625/6495ED/000000',
                price: '700 $',
                details: [
                    '- Up to 2 hours comprehensive session (multiple locations/looks)',
                    '- Includes partner, children & extended family poses',
                    '- 30+ professionally retouched digital images',
                    '- Online gallery, custom USB drive & fine art print credit',
                    '- Full access to exquisite maternity gown client closet',
                    '- Professional hair & makeup artist recommendation',
                    '- Detailed concept & styling consultation',
                    '- Priority editing turnaround',
                ],
            },
        ],
        faq: [
            {
                question: "When is the ideal time to schedule a maternity photoshoot?",
                answer: "The best time for maternity photos is typically between 28 and 34 weeks of pregnancy (7th to 8th month). This is when your baby bump is beautifully rounded, and you generally still feel comfortable and radiant.",
            },
            {
                question: "What should I wear for my maternity photography session?",
                answer: "We offer an exclusive client closet with a stunning collection of maternity gowns in various styles and sizes designed to flatter your pregnant figure. You are also welcome to bring your own outfits. We recommend flowy dresses, fitted gowns, or comfortable, elegant attire that highlights your bump.",
            },
            {
                question: "Can my partner and other children be included in the maternity photos?",
                answer: "Absolutely! Your partner and children are encouraged to participate. These sessions are a beautiful way to capture your growing family's excitement and love before the new arrival. Please let us know in advance so we can plan accordingly.",
            },
            {
                question: "Where do maternity photoshoots usually take place?",
                answer: "We offer flexibility! Sessions can be held in our comfortable studio for a controlled and classic look, outdoors at a scenic location (like a park, beach, or field) to utilize natural beauty, or as a lifestyle session in the comfort of your own home.",
            },
            {
                question: "Do you offer hair and makeup services for maternity sessions?",
                answer: "While professional hair and makeup are not included in all packages, we highly recommend them for a polished look. We can provide recommendations for talented local artists who specialize in maternity photoshoots.",
            },
            {
                question: "What if I feel uncomfortable or self-conscious during the photoshoot?",
                answer: "Many expectant mothers feel this way, but our priority is your comfort and confidence. We will guide you through flattering poses, ensure a relaxed atmosphere, and focus on capturing your natural beauty and the joy of your pregnancy. You'll be amazed at the stunning results!",
            },
        ],
    },
};


export interface Testimonial {
    id: number;
    imageSrc: string;
    quote: string;
    body: string[];
    author: string;
    imagePosition?: 'left' | 'right'; // Prop to control image position for this single testimonial
}

export const testimonialsData: Testimonial[] = [
    {
        id: 1,
        imageSrc: '/images/testimonial1.jpg',
        quote: 'Pure magic in every photo.',
        body: [
            'Ekaterina captured the most magical moments between me and my daughter during our outdoor photoshoot in New York. She made us feel so comfortable and at ease, and it truly felt like we were just having fun together while she gently guided us.',
            'When I received the photos, I honestly teared up—they were full of light, love, and genuine emotion. I’ll treasure them forever.',
            'Thank you for your talent and kindness, Ekaterina!',
        ],
        author: 'Malika T.',
        imagePosition: 'left',
    },
    {
        id: 2,
        imageSrc: '/images/testimonial2.jpg',
        quote: 'Memories we\'ll cherish forever.',
        body: [
            'Our newborn photoshoot with Ekaterina was such a beautiful experience. She came to our home and created such a calm and cozy atmosphere—it was like having a close friend visit. ',
            'As new parents, we were nervous and tired, but she made the whole process so smooth and easy. The photos she delivered were beyond what we imagined: tender, emotional, and absolutely stunning.',
            'We can’t thank you enough, Ekaterina!',
        ],
        author: 'Samantha & Jake R.',
        imagePosition: 'right',
    },
    {
        id: 3,
        imageSrc: '/images/testimonial3.jpg',
        quote: 'Effortless, warm, and beautiful.',
        body: [
            'I will never forget the way Ekaterina captured me and my baby girl in those first few precious days. She was so gentle with my newborn, and so understanding of my emotions as a new mom.',
            'The way she caught every tiny detail—from little fingers to sleepy smiles - melted my heart. These photos are a gift I will cherish forever.',
            'Thank you, Ekaterina, for giving me this treasure.',
        ],
        author: 'Julia M.',
        imagePosition: 'left',
    },
    {
        id: 4,
        imageSrc: '/images/testimonial4.jpg',
        quote: 'Memories we\'ll cherish forever',
        body: [
            'Our in-home cake smash session with Ekaterina was an absolute dream! She was patient, playful, and so creative. My daughter had the time of her life smashing her cake while she captured every silly, sweet moment.',
            'The colors, the laughter, the little expressions—everything came out picture-perfect. I’ve already printed and framed several of the photos.',
            'Thank you for capturing our girl\'s first birthday so beautifully, Ekaterina!'
        ],
        author: 'Lina S.',
        imagePosition: 'right',
    },
];