import Link from 'next/link';
import { useState } from 'react';
import { socialLinks, menuItems } from "@/utils/constants";

interface MainMenuProps {
    isMobile?: boolean;
    closeMenu?: () => void;
}

export default function MainMenu({ isMobile = false, closeMenu }: MainMenuProps) {
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

    const handleSubmenuToggle = (itemName: string) => {
        setOpenSubmenu(openSubmenu === itemName ? null : itemName);
    };

    const handleLinkClick = () => {
        if (closeMenu) {
            closeMenu();
        }
        setOpenSubmenu(null); // Close any open submenus on navigation
    };

    if (isMobile) {
        return (
            <div className="w-full"> {/* Wrapper for full width on mobile */}
                <ul className="flex flex-col space-y-4 mb-8"> {/* Added margin-bottom for social links */}
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            {item.subItems ? (
                                <div>
                                    <button
                                        onClick={() => handleSubmenuToggle(item.name)}
                                        className="font-normal text-gray-700 hover:text-gray-900 text-lg w-full text-left py-2">
                                        {item.name.toUpperCase()}
                                        <span className="float-right">{openSubmenu === item.name ? '▲' : '▼'}</span>
                                    </button>
                                    {openSubmenu === item.name && (
                                        <ul className="ml-4 mt-2 space-y-2">
                                            {item.subItems.map((subItem) => (
                                                <li key={subItem.name}>
                                                    <Link href={subItem.href} className="block text-gray-600 hover:text-gray-800 text-base" onClick={handleLinkClick}>
                                                        {subItem.name.toUpperCase()}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <Link href={item.href} className="block font-normal text-gray-700 hover:text-gray-900 text-lg py-2" onClick={handleLinkClick}>
                                    {item.name.toUpperCase()}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                {/* Social links for mobile menu */}
                <div className="flex justify-center space-x-6 mt-8 border-t border-gray-200 pt-6"> {/* Added top border for separation */}
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.name.toUpperCase()}
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                            <link.icon className="w-6 h-6" /> {/* Render the icon component */}
                        </a>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <ul className="flex items-center space-x-6">
            {menuItems.map((item, index) => (
                <li key={item.name} className="relative group">
                    <Link href={item.href} className="font-normal text-gray-700 hover:text-gray-900 text-base uppercase px-2 py-1">
                        {item.name.toUpperCase()}
                    </Link>
                    {item.subItems && (
                        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 invisible pt-2 pb-2">
                            <ul className="py-1">
                                {item.subItems.map((subItem) => (
                                    <li key={subItem.name}>
                                        <Link href={subItem.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            {subItem.name.toUpperCase()}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {/* Add separator only if it's not the last item in the main menu */}
                    {index < menuItems.length - 1 && (
                        <span className="text-gray-400 select-none">•</span>
                    )}
                </li>
            ))}
            {/* Social links for desktop menu (added at the end of the main menu items) */}
            <li className="ml-8 flex items-center space-x-4">
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name.toUpperCase()}
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                        <link.icon className="w-5 h-5" />
                    </a>
                ))}
            </li>
        </ul>
    );
}
