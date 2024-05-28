/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "imgs.search.brave.com",
            },
            {
                protocol: "https",
                hostname: "www.goodnightjournal.com",
            },
        ],
    },
};

export default nextConfig;
