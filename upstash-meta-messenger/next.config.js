/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'links.papareact.com',
      'scontent.fcmb1-2.fna.fbcdn.net',
      'platform-lookaside.fbsbx.com',
    ],
  }
}
