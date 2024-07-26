const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: '/ThaovyLe-Portfolio',
};

module.exports = withNextVideo(nextConfig);
