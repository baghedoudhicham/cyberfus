/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  // Image optimization can be re-enabled for Firebase Hosting
  images: {
    unoptimized: false,
    domains: ['i.pravatar.cc', 'www.svgrepo.com'],
  },
};

module.exports = nextConfig;
