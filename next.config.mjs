/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/metodoelg',
  assetPrefix: '/metodoelg',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
