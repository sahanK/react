/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['links.papareact.com', 'cdn.sanity.io', 'lh3.googleusercontent.com']
  }
};