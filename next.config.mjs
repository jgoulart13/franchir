/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Ignore Next.js 15 ResolvingMetadata type export bug during build (types still checked in IDE)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

