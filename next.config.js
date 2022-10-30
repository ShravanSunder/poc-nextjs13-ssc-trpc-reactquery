/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  productionBrowserSourceMaps: true,
  experimental: {
    appDir: true,
    allowMiddlewareResponseBody: true,
    swcFileReading: true,
    externalDir: true,
    swcPlugins: swcPlugins(),
  },
};

module.exports = nextConfig;
function swcPlugins() {
  return [
    [
      'next-superjson-plugin',
      {
        excluded: [],
      },
    ],
  ];
}
