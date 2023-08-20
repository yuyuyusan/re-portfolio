/** @type {import('next').NextConfig} */
const path = require('path'); 
const nextConfig = {}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


module.exports = withBundleAnalyzer({
  images: {
    domains: ['images.microcms-assets.io'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/app/styles')],
  },
  swcMinify: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });
    return config;
  },
})