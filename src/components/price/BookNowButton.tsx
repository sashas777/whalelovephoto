import Link from 'next/link';
import { instagramLink } from "@/utils/constants";

export default function BookNowButton() {
    return (
        <div className={`flex justify-center w-full bg-white pb-12`}>
            <Link
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-lg bg-black text-white text-center text-center py-4 rounded-full uppercase text-lg font-normal tracking-widest
                  hover:bg-gray-700 transition-colors duration-300">
                Book Now
            </Link>
        </div>
    );
}
