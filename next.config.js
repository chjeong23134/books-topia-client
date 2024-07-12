/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['image.aladin.co.kr'],
	},
	async rewrites() {
		return [
			{
				source: "/auth/:path*",
				destination: "http://localhost:8080/auth/:path*",
			},
			{
				source: "/aladin/:path*",
				destination: "http://localhost:8080/aladin/:path*",
			},
		];
	},
};

module.exports = nextConfig