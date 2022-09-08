/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  productionBrowserSourceMaps: true,
  webpack: {
    devtool: "source-map",
  },
};

module.exports = nextConfig;
