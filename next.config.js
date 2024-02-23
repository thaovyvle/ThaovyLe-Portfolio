/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: '/ThaovyLe-Portfolio',
}

module.exports = {
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
  experimental: {
    images: {
      unstable_styleRewriting: true,
    },
  },
}
