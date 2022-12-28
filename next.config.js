const { withPlugins } = require("next-compose-plugins");
const { join } = require("path");

const nextConfig = {
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
    serverRuntimeConfig: {
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    },
    env: {
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    },
    images: {
        loader: "akamai",
        path: "",
        domains: [
            "images.unsplash.com",
            "images.obi.at",
            "imgur.com",
            "avatars.githubusercontent.com",
            "ca.slack-edge.com",
        ],
    },
};
