import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  output: "standalone",

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "feeds.abplive.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "media.istockphoto.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "flagpedia.net" },
      { protocol: "https", hostname: "akm-img-a-in.tosshub.com" },
      { protocol: "https", hostname: "media.assettype.com" },
      { protocol: "https", hostname: "images.hindustantimes.com" },
      { protocol: "https", hostname: "iplix.in" },
      { protocol: "https", hostname: "i2-prod.cornwalllive.com" },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        child_process: false,
      };

      config.output = {
        ...config.output,
        globalObject:
          'typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : this',
      };
    }

    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        concatenateModules: true,
      };
    }

    return config;
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

export default nextConfig;
