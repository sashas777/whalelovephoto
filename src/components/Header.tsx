'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MainMenu from './MainMenu';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white py-6 md:py-8 px-4 relative z-50 shadow-sm">
            <div className="container mx-auto flex flex-col items-center">
                {/* Logo Section - Centered at the top */}
                <div className="mb-6 md:mb-8"> {/* Increased margin bottom for separation */}
                    <Link href="/" className="flex flex-col items-center">
                        <Image
                            src="/images/logo.png"
                            alt="Ekaterina Ferrante | Create Timeless Memories Today"
                            width={607}
                            height={170}
                            sizes="100vw"
                            className="mt-5 md:mt-0 md:h-auto md:max-h-24 md:w-auto object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation - Centered below the logo */}
                <nav className="hidden md:block">
                    <MainMenu />
                </nav>

                {/* Mobile Menu Button - Appears on smaller screens */}
                <div className="md:hidden absolute top-6 right-6"> {/* Positioned top-right for mobile */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-800 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        {/* Hamburger icon */}
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay - Full screen overlay when active */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-white shadow-lg py-8 px-6 z-40 flex flex-col items-center justify-start overflow-y-auto">
                    <MainMenu isMobile={true} closeMenu={() => setIsMobileMenuOpen(false)} />
                    {/* Close button for mobile menu, positioned at the top right of the overlay */}
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="absolute top-6 right-6 text-gray-800 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
                        aria-label="Close mobile menu"
                    >
                        {/* Close (X) icon */}
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            )}
        </header>
    );
}
