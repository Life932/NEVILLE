/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    qualities: [25, 50, 75, 90],
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      // DEV NOTE: When you eventually use Sanity CMS or AWS for real images,
      // you will just add another object here like:
      // { protocol: 'https', hostname: 'cdn.sanity.io' }
    ],
  },
};

export default nextConfig;
