/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [360, 640, 768, 1024, 1280, 1536],
        imageSizes: [96, 160, 256, 384],
        minimumCacheTTL: 31536000,
    },
    async redirects() {
        return [
            {
                source: '/Resume',
                destination: '/resume.pdf',
                permanent: true,
            }
        ];
    },
};

export default nextConfig;
