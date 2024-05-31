import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/photo-gallery",
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com'],
  },
};

export default withPlaiceholder(nextConfig);
