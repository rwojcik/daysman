/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');

const nextConfig = {
  distDir: 'build',
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = withPlugins([withCSS, withFonts], nextConfig);
