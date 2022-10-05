/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.jsdelivr.net"],
  },
  future: { webpack5: true },
}

module.exports = nextConfig
