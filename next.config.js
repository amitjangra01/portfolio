/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  
  output: 'export',
};

module.exports = nextConfig;