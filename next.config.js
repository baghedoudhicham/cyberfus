/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  // Configuration for static export
  output: 'export',

  // The `basePath` and `assetPrefix` properties are configured automatically by
  // the `actions/configure-pages@v5` workflow step.

  // Disable default image optimization, which is not compatible with static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
