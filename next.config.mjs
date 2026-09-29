/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/3d_blueprints_view',
  trailingSlash: true,

  reactStrictMode: true,

  transpilePackages: [
    'three',
    '@react-three/fiber',
    '@react-three/drei',
  ],

  images: {
    unoptimized: true,
  },
};

export default nextConfig;