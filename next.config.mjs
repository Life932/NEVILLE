/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    qualities: [75, 90],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      // DEV NOTE: When you eventually use Sanity CMS or AWS for real images,
      // you will just add another object here like:
      // { protocol: 'https', hostname: 'cdn.sanity.io' }
    ],
  },
};

export default nextConfig;
