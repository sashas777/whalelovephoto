import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'place-hold.it',
                port: '',
                pathname: '/**',
            }
        ],
    },
    env: {
        NEXT_PUBLIC_SITE_URL: process.env.NODE_ENV === 'production'
            ? 'http://localhost:3015'
            : 'http://localhost:3000',
    },
};

export default nextConfig;
