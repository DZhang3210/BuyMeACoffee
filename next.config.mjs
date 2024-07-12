/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com'
          },
          {
            protocol: 'https',
            hostname: 'buy-me-coffee.s3.amazonaws.com'
          },
        ],
      },
};

export default nextConfig;
