import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	compress: true,
	poweredByHeader: false,
	images: {
		unoptimized: true,
		formats: ["image/avif", "image/webp"],
	},
	// cacheComponents: true,
	reactCompiler: true,
};

export default nextConfig;
