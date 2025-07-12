/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  compiler: {
    reactStrictMode: true,
  },
  swcMinify: true,
  experimental: {
    swcJsxTransformConfig: {
      throwIfNamespace: false
    }
  }
}

export default nextConfig