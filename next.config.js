// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/dshhmlp1l/image/upload/v1703664645/f1/**', // Adjust this path based on your Cloudinary organization
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  