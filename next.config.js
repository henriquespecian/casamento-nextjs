const withFonts = require('next-fonts');
const withImages = require('next-images');
const withTM = require('next-transpile-modules')([
  '@react95/core',
  '@react95/icons',
]);

const nextConfig = {
  images: {
    disableStaticImages: true,
  },
  basePath: '/casamento-nextjs',
};

module.exports = withTM(withFonts(withImages(nextConfig)));
