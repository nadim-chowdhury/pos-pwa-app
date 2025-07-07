// next.config.mjs
import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const pwaConfig = {
  dest: "public",
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: "/offline",
    image: "/offline",
    audio: "/offline",
    video: "/offline",
    font: "/offline",
  },
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: "NetworkFirst" as const,
      options: {
        cacheName: "offlineCache",
        expiration: {
          maxEntries: 200,
        },
      },
    },
  ],
};

const withPWAPlugin = withPWA(pwaConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default withPWAPlugin(nextConfig);
