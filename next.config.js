/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  endabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

module.exports = withBundleAnalyzer(nextConfig)
