/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ['127.0.0.1', 'local-origin.dev', '*.local-origin.dev', '192.168.0.100'],
};

export default nextConfig;
nextConfig.images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
};
