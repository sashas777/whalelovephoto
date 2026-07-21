import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] bg-white text-gray-800">
            <h1 className="text-5xl md:text-7xl font-light mb-4">
                Bad lens flare!
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
                This page is lost in the digital light leak.
            </p>
            <Link href="/" className="text-black-600 underline hover:underline">
                Go back
            </Link>
        </div>
    );
}
