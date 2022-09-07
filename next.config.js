/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    productionBrowserSourceMaps: true,
  },
  webpack: { devtool: "source-map" },
};

module.exports = nextConfig;
