/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  images: {
    domains: [
      'images.pexels.com',
      'img.freepik.com',
      'images.unsplash.com',
      'via.placeholder.com',
      'dev-ui-image-assets.s3.ap-south-1.amazonaws.com',
      'plus.unsplash.com',
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'nextjs.org',
      'randomuser.me',
      'images.remotePatterns',
      'images.generated.photos'
    ],
  },
};

export default nextConfig;
