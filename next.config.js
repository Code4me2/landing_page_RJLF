/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/landing_page_RJLF',
  assetPrefix: '/landing_page_RJLF',
}

module.exports = nextConfig