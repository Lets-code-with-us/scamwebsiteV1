/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'images.pexels.com',
        'img.freepik.com',
        'images.unsplash.com',
        'via.placeholder.com',
        'dev-ui-image-assets.s3.ap-south-1.amazonaws.com',
        'plus.unsplash.com',
        'res.cloudinary.com',
        'leerob.io',
        'nextjs.org',
        'randomuser.me',
        'images.generated.photos', // Added domain from the second config
        'images.remotePatterns', // Ensure this is correct; might be a typo
      ],
    },
  };
  
  export default nextConfig;
  