/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    remotePatters: [
      {
        protocol: 'https'
      }
    ]
  },
}


module.exports = nextConfig
