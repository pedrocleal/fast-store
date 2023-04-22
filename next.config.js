/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['rocketseat-cdn.s3-sa-east-1.amazonaws.com'],
  }
}

module.exports = nextConfig
