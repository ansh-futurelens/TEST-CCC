const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/.*\.(png|jpg|jpeg|svg|gif|webp)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "image-cache",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
        },
        cacheableResponse: { statuses: [0, 200] },
      },
    },
  ],
});

module.exports = withPWA({
  reactStrictMode: true,
});
