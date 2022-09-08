/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  productionBrowserSourceMaps: true,
  async headers() {
    return [
      {
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
};

module.exports = nextConfig;
