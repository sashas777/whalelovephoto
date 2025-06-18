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
};

export default nextConfig;
