const withPlugins = require('next-compose-plugins');
const withLess = require("next-with-less");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const plugins = [
  /* ...other plugins... */
  [withLess, {
    lessLoaderOptions: {
      /* ... */
    },
  }],
  /* ...other plugins... */
];


module.exports = withPlugins([...plugins], nextConfig);

//module.exports = nextConfig
