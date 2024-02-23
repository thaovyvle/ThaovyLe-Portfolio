/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: '/ThaovyLe-Portfolio',
  images: {
    path: "out/images",
    loader: "default",
  },
};

module.exports = nextConfig;
