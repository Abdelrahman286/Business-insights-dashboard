/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "cdn.jsdelivr.net",
      "avatars.githubusercontent.com",
    ], // ✅ add this line
  },
};

module.exports = nextConfig;
