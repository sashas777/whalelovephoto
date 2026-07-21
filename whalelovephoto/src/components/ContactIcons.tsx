import Link from 'next/link';
import { FaTelegramPlane, FaWhatsapp, FaPhone } from 'react-icons/fa';
import {phoneNumber} from "@/utils/constants";

export default function ContactIcons() {
    const telegramLink = `https://t.me/${phoneNumber.replace(/[^0-9\+]+/g, '')}`;
    const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^0-9\+]+/g, '')}`;

    return (
        <div className="flex items-center space-x-2">
            <Link
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact on Telegram"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
                <FaTelegramPlane className="w-5 h-5" />
            </Link>
            <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact on WhatsApp"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
                <FaWhatsapp className="w-5 h-5" />
            </Link>
            <Link
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                aria-label={`Call ${phoneNumber}`}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 text-base font-normal transition-colors duration-200"
            >
                <FaPhone className="w-5 h-5 text-gray-600" />
                <span>{phoneNumber}</span>
            </Link>
        </div>
    );
}
