/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "cdn.jsdelivr.net",
      "avatars.githubusercontent.com",
      "via.placeholder.com",
      "picsum.photos",
    ], // ✅ add this line
  },
};

module.exports = nextConfig;
