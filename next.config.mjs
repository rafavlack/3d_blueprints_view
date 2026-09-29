/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/3d_blueprints_view',
  assetPrefix: '/3d_blueprints_view/',
  reactStrictMode: true,
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
};

export default nextConfig;
