/* eslint-disable @typescript-eslint/no-var-requires */
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css')

module.exports = withCSS(withFonts());
