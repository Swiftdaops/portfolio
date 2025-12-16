/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // allow images from Cloudinary (used in Hero component)
    // keep `domains` for compatibility, and add `remotePatterns` to follow
    // Next.js recommendation (more flexible and not deprecated).
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

// Redirect old routes to new paths (useful after renaming folders)
nextConfig.redirects = async () => {
  return [
    {
      source: '/page1',
      destination: '/steeze',
      permanent: true,
    },
    {
      source: '/page2',
      destination: '/ebooks',
      permanent: true,
    },
  ];
};

export default nextConfig;
