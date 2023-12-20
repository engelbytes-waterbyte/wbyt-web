const { withPlugins } = require("next-compose-plugins");
const { join } = require("path");

const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	reactStrictMode: true,

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: "@svgr/webpack",
		});
		return config;
	},
};

module.exports = {
	...nextConfig,
	output: "standalone",

	babel: {
		presets: ["next/babel"],
		plugins: [["styled-components", { ssr: true }]],
	},
	serverRuntimeConfig: {
		NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
		SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
	},
	env: {
		NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
		SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
	},
};
