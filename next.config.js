/** @type {import('next').NextConfig} */
const path = require('path'); 
const nextConfig = {}

module.exports = {
  images: {
    domains: ['images.microcms-assets.io'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  swcMinify: false,
};