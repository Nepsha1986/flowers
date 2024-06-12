/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.publit.io',
                port: '',
                pathname: '/file/**',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/en-us',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
