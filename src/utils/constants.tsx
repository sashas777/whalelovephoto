import {FaFacebookF, FaInstagram, FaPinterestP} from "react-icons/fa";

export const instagramLink = 'https://www.instagram.com/whalelovephoto';
export const socialLinks = [
    { name: 'Instagram', href: instagramLink, icon: FaInstagram },
    { name: 'Facebook', href: 'https://www.facebook.com/whalelovephoto', icon: FaFacebookF },
    { name: 'Pinterest', href: 'https://www.pinterest.com/whalelovephoto/', icon: FaPinterestP },
];

export const phoneNumber = '+1 347-560-3111';
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
        image: 'https://place-hold.it/500x700', // Placeholder image path
        link: '/price/newborn',
    },
    {
        id: 2,
        name: 'Cake Smash',
        image: 'https://place-hold.it/500x700', // Placeholder image path
        link: '/price/cake-smash',
    },
    {
        id: 3,
        name: 'Family',
        image: 'https://place-hold.it/500x700', // Placeholder image path
        link: '/price/family',
    },
    {
        id: 4,
        name: 'Maternity',
        image: 'https://place-hold.it/500x700', // Placeholder image path
        link: '/price/maternity',
    },
];

export const pricingPlans = {
    newborn: {
        sectionName: 'Newborn Photography Sessions',
        description: 'Capture the fleeting moments of your little one\'s earliest days with our professional newborn photography sessions. Specializing in safe, artistic, and gentle newborn portraits, we create timeless memories for your family.',
        plans: [
            {
                id: 1,
                name: 'Mini',
                imageSrc: 'https://place-hold.it/500x625/87CEEB/FFFFFF?text=Newborn+Mini', // Placeholder image for newborn mini
                price: '300 $',
                details: [
                    '- 1 hour in-studio session',
                    '- Focus on wrapped poses',
                    '- 10 professionally retouched digital images',
                    '- Private online gallery for selection',
                    '- Print release for personal use',
                    '- Best for babies 5-14 days old',
                ],
            },
            {
                id: 2,
                name: 'Classic',
                imageSrc: 'https://place-hold.it/500x625/B0E0E6/FFFFFF?text=Newborn+Classic', // Placeholder image for newborn classic
                price: '450 $',
                details: [
                    '- Up to 2-3 hours in-studio session',
                    '- Variety of posed shots & prop setups',
                    '- 20 professionally retouched digital images',
                    '- Includes parent & sibling poses',
                    '- Private online gallery for selection & sharing',
                    '- Full print release',
                    '- Pre-session consultation for styling & props',
                ],
            },
            {
                id: 3,
                name: 'Premium',
                imageSrc: 'https://place-hold.it/500x625/ADD8E6/FFFFFF?text=Newborn+Premium', // Placeholder image for newborn premium
                price: '700 $', // Removed 'from'
                details: [
                    '- Up to 3-4 hours relaxed in-studio session',
                    '- Extensive collection of posed & candid shots',
                    '- 30+ professionally retouched digital images',
                    '- Includes all family members (parents, siblings, grandparents)',
                    '- Access to client closet: wraps, outfits, props',
                    '- Large private online gallery & custom USB drive',
                    '- Fine art prints or album credit included',
                    '- Detailed pre-session planning & styling guide',
                ],
            },
        ],
        faq: [
            {
                question: "When is the best time to book a newborn photography session?",
                answer: "It's highly recommended to book your newborn session during your second or early third trimester to ensure availability. The ideal time for the photoshoot itself is within the first 5-14 days after birth, when your baby is still very sleepy and flexible for those adorable curly poses.",
            },
            {
                question: "Do you provide props, outfits, and wraps for the newborn sessions?",
                answer: "Yes, absolutely! Our studio is fully stocked with a wide array of high-quality, sanitized props, wraps, headbands, bonnets, and tiny outfits. You don't need to bring anything unless there's a sentimental item you wish to include.",
            },
            {
                question: "Can parents and siblings be included in the newborn photos?",
                answer: "We strongly encourage parents and siblings to participate! These early family moments are truly special. We prioritize family shots at the beginning of the session to ensure everyone is comfortable and happy.",
            },
            {
                question: "How long does a typical newborn photoshoot last?",
                answer: "Newborn sessions are unhurried and can last between 2 to 4 hours. This allows ample time for feeding, changing, soothing, and ensuring your baby is comfortable and relaxed throughout the session.",
            },
            {
                question: "What if my baby is fussy or doesn't want to pose during the session?",
                answer: "It's completely normal for babies to be unpredictable! I'm experienced in newborn posing and soothing techniques. We'll follow your baby's lead, take breaks as needed, and ensure a calm and patient environment. Your baby's comfort and safety are our top priority.",
            },
            {
                question: "When will I receive my newborn photo gallery?",
                answer: "Your private online proofing gallery will typically be ready for viewing within 7-10 business days after your session. Once you've made your selections, the final retouched images will be delivered within 2-3 weeks.",
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
                imageSrc: 'https://place-hold.it/500x625/FFDAB9/000000?text=Cake+Smash+Mini', // Placeholder image for cake smash mini
                price: '300 $',
                details: [
                    '- 60 minute in-studio session',
                    '- Simple backdrop setup (color of choice)',
                    '- 10 high-resolution retouched images',
                    '- Includes cake smash & bubble bath splash',
                    '- Online gallery for selection',
                    '- Client provides the cake',
                ],
            },
            {
                id: 2,
                name: 'Classic',
                imageSrc: 'https://place-hold.it/500x625/FFDDC1/000000?text=Cake+Smash+Classic', // Placeholder image for cake smash classic
                price: '450 $',
                details: [
                    '- Up to 90 minute in-studio session',
                    '- Custom themed backdrop & decorations',
                    '- 20 high-resolution retouched images',
                    '- Includes pre-smash portraits, cake smash & bubble bath',
                    '- Online gallery & print release',
                    '- Client provides the cake',
                    '- Outfit guidance',
                ],
            },
            {
                id: 3,
                name: 'Premium',
                imageSrc: 'https://place-hold.it/500x625/FFE4B5/000000?text=Cake+Smash+Premium', // Placeholder image for cake smash premium
                price: '700 $', // Removed 'from'
                details: [
                    '- Up to 2 hour bespoke in-studio session',
                    '- Elaborate custom theme with premium props & decor',
                    '- 30+ high-resolution retouched images',
                    '- Pre-smash portraits, multiple cake smash angles & splash bath',
                    '- Online gallery, print release & custom USB',
                    '- Option to include custom cake (additional fee may apply)',
                    '- Wardrobe consultation & access to client closet outfits',
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
                imageSrc: 'https://place-hold.it/500x625/BDB76B/FFFFFF?text=Family+Mini', // Placeholder image for family mini
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
                imageSrc: 'https://place-hold.it/500x625/DAA520/FFFFFF?text=Family+Classic', // Placeholder image for family classic
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
                imageSrc: 'https://place-hold.it/500x625/FFD700/000000?text=Family+Premium', // Placeholder image for family premium
                price: '700 $', // Removed 'from'
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
                answer: "Your private online proofing gallery will be ready within 1-2 weeks for you to select your favorite images. Once your selections are made, the final retouched high-resolution digital images will be delivered within 3-4 weeks.",
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
                imageSrc: 'https://place-hold.it/500x625/B0E0E6/000000?text=Maternity+Mini', // Placeholder image for maternity mini
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
                imageSrc: 'https://place-hold.it/500x625/87CEFA/000000?text=Maternity+Classic', // Placeholder image for maternity classic
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
                imageSrc: 'https://place-hold.it/500x625/6495ED/000000?text=Maternity+Premium', // Placeholder image for maternity premium
                price: '700 $', // Removed 'from'
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
    date: string;
    imagePosition?: 'left' | 'right'; // Prop to control image position for this single testimonial
}

export const testimonialsData: Testimonial[] = [
    {
        id: 1,
        imageSrc: 'https://place-hold.it/510x640', // Testimonial 1 image
        quote: 'The photos of our wedding are just wow!',
        body: [
            'Hello Ekaterina,',
            'Thank you so much for the time, care, and dedication you put into capturing our wedding day. We are absolutely in love with the photos — they are everything we hoped for and more. Your incredible attention to detail and ability to capture genuine emotions made every shot come to life.',
            'Choosing you as our photographer was the best decision we made, and we’re so grateful for how beautifully you preserved these precious memories for us. Our family and friends can’t stop talking about how stunning the photos are!',
            'Thank you from the bottom of our hearts for your amazing work!',
        ],
        author: 'Karolina & Artur',
        date: 'August, 2022',
        imagePosition: 'left',
    },
    {
        id: 2,
        imageSrc: 'https://place-hold.it/510x640', // Testimonial 2 image
        quote: 'We can’t thank you enough',
        body: [
            'Ekaterina is an extraordinary professional! The photos from our wedding are absolutely stunning — simply wow! I have never met a photographer so devoted to her craft, meticulously perfecting every detail with such passion and care.',
            'I stumbled across Ekaterina’s work by chance on Instagram, but the moment I saw her portfolio, I knew she was the one I wanted to capture our wedding day. She turned our vision into reality and exceeded every expectation we had.',
            'We are incredibly thankful for her talent and dedication. Thank you, Ekaterina! Keep creating such beautiful magic!',
        ],
        author: 'Francesca & Andrea',
        date: 'September, 2023',
        imagePosition: 'right', // This image is on the right
    },
    {
        id: 3,
        imageSrc: 'https://place-hold.it/510x640', // Testimonial 3 image
        quote: 'She creatively turned every moment into pure magic',
        body: [
            'We booked Ekaterina as our wedding photographer even before finalizing other details, and it was the best decision we made! From the moment I saw her portfolio, I knew her elegant, vibrant photography style was exactly what I had envisioned for our wedding.',
            'Even when the weather wasn’t perfect, Ekaterina managed to turn every moment into a beautiful photo opportunity. Her creativity and attention to detail resulted in images that far exceeded anything we could have imagined. Our family and friends are in awe of how stunning our wedding photos are!',
            'The love, emotion, and joy captured in every picture is truly special.',
            'Thanks to Ekaterina, we now have beautiful, timeless memories that perfectly reflect the essence of our day. We are incredibly grateful for her talent and dedication. If you’re considering Ekaterina, don’t hesitate — she’s absolutely the best!',
        ],
        author: 'Kaitlin & Joseph',
        date: 'September, 2023',
        imagePosition: 'left', // This image is on the left
    },
    {
        id: 4,
        imageSrc: 'https://place-hold.it/510x640', // Testimonial 4 image
        quote: '... we’re so happy that we chose you to capture it',
        body: [
            'Outstanding work, Ekaterina! We can’t thank you enough for everything. You made us both feel so at ease throughout the entire process. Your attention to detail, genuine care at every step, and quick responses to our messages made everything so smooth. We can’t recommend you enough — you\'re truly amazing! Thank you for capturing our special day so beautifully!',
        ],
        author: 'Alicja & Piotr',
        date: 'June, 2024',
        imagePosition: 'right', // This image is on the right
    },
];