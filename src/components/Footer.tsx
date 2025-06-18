import { socialLinks, emailAddress } from "@/utils/constants";
import ContactIcons from "@/components/ContactIcons";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 text-gray-700 py-10 md:py-16 px-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                {/* Left Section */}
                <div className="mb-8 md:mb-0 md:w-1/3 flex flex-col items-center md:items-start">
                    <div className="flex items-center space-x-2 mb-2">
                       <ContactIcons/>
                    </div>
                </div>

                {/* Middle Section: Name, Profession, Location, Email */}
                <div className="mb-8 md:mb-0 md:w-1/3 flex flex-col items-center">
                    <h3 className="text-xl md:text-2xl font-light text-gray-800 mb-2 uppercase tracking-widest">
                        Ekaterina Ferrante {/* Changed name as per request */}
                    </h3>
                    <p className="text-sm font-light text-gray-600 mb-1">professional photographer</p>
                    <p className="text-sm font-light text-gray-600 mb-2">Capture precious moments with expert</p>
                    <a href={`mailto:${emailAddress}`} className="text-base text-gray-700 hover:text-gray-900 font-normal">
                        {emailAddress}
                    </a>
                </div>
                {/* Right Section: Social Links */}
                <div className="md:w-1/3 flex justify-center md:justify-end space-x-5">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.name}
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                            <link.icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>
            </div>
            {/* Copyright text at the very bottom */}
            <div className="mt-10 pt-6 border-t border-gray-300 text-center text-xs text-gray-500">
                <p>&copy; {currentYear} Ekaterina Ferrante. All rights reserved.</p>
            </div>
        </footer>
    );
}
