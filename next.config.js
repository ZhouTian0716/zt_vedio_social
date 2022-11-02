/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "zt-image-storage.s3.ap-southeast-2.amazonaws.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
// typescript:{
//   ignoreBuildErrors:true
// },
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig
