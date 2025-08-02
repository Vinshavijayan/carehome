import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export', 
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'img.freepik.com','source.unsplash.com','carehome.infartechnologies.com'],
  },
};

export default nextConfig;