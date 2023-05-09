/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactMode: 'concurrent',
    verbose: true,
  },
}

module.exports = nextConfig
