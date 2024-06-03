/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
  },
  images: {
    domains: ['drive.google.com', 'drive.usercontent.google.com'],
  },
};

module.exports = nextConfig;
