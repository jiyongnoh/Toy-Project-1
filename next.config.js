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
  eslint: {
    // 빌드 중 ESLint 오류를 무시합니다.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
