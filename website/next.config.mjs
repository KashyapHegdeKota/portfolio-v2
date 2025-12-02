/** @type {import('next').NextConfig} */
const nextConfig = {
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
