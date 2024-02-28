/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: '/ThaovyLe-Portfolio',
  assetPrefix: '/ThaovyLe-Portfolio,
  env: {
        BACKEND_URL: '/ThaovyLe-Portfolio',
  },
};

module.exports = nextConfig;
