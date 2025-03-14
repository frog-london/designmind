/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static HTML export
  images: {
    unoptimized: true,  // Required for static export
  },
  // Replace 'inspiration-landing' with your actual repository name
  basePath: process.env.NODE_ENV === 'production' ? '/designmind' : '',
  trailingSlash: true,  // Recommended for GitHub Pages
};

export default nextConfig;