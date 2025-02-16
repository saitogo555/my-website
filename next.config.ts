import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: false,
	compress: true,
	poweredByHeader: false,
	images: {
		unoptimized: true,
		formats: ["image/avif", "image/webp"],
	},
};

export default nextConfig;
