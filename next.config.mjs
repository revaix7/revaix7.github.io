/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages
  output: "export",
  // GitHub Pages has no image optimization server
  images: { unoptimized: true },
  // User site (revaix7.github.io) serves from domain root — no basePath needed
  trailingSlash: true,
};

export default nextConfig;
