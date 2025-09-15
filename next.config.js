/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  // Image optimization can be re-enabled for Firebase Hosting
  images: {
    unoptimized: false,
  },
};

module.exports = nextConfig;
