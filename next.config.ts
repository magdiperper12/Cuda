import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(mp3|wav|ogg)$/,
			use: {
				loader: 'file-loader',
				options: {
					publicPath: '/_next/static/sounds',
					outputPath: 'static/sounds',
					name: '[name].[hash].[ext]',
				},
			},
		});
		return config;
	},
	// Add other Next.js config options here if needed
};

export default nextConfig;
