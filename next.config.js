const withFonts = require('next-fonts');
const withImages = require('next-images');
const withTM = require('next-transpile-modules')([
  '@react95/core',
  '@react95/icons',
]);

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    disableStaticImages: true,
  },
  basePath: isProd ? '/casamento-nextjs' : undefined,
};

module.exports = withTM(withFonts(withImages(nextConfig)));

module.exports = {
  env: {
    GOOGLE_SERVICE_PRIVATE_KEY: process.env.GOOGLE_SERVICE_PRIVATE_KEY,
  },
};