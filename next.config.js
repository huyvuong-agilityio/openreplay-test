/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  webpack: {
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
      ],
    },
  },
  rewrites: async () => {
    // do not leak source-maps in Vercel production deployments
    // but keep them in Vercel preview deployments with generated urls
    // for better dev experience
    const isVercelProdDeploy = process.env.VERCEL_ENV === "production";

    if (isVercelProdDeploy) {
      return {
        beforeFiles: [
          {
            source: "/:path*.map",
            destination: "/404",
          },
        ],
      };
    }

    return [];
  },
  // ...
};

module.exports = nextConfig;
