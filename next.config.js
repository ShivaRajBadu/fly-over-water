/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    MAP_BOX_TOKEN: process.env.MAP_BOX_TOKEN,
  },
};
