/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: '/ThaovyLe-Portfolio',
  experimental: {
    images: {
      unstable_styleRewriting: true,
    },
  },
}

module.exports = nextConfig
