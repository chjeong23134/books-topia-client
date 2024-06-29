/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async rewrites() {
		return [
			{
				source: "/auth/:path*",
				destination: "http://localhost:8080/auth/:path*",
			},
		];
	},
};

module.exports = nextConfig