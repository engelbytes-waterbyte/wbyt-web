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
    experimental: {
        images: {
            layoutRaw: true,
        },
    },
};

module.exports = {
    ...nextConfig,
    plugins: {
        tailwindcss: {
            config: join(__dirname, "tailwind.config.js"),
        },
        autoprefixer: {},
    },
    images: {
        domains: [
            "images.unsplash.com",
            "images.obi.at",
            "imgur.com",
            "avatars.githubusercontent.com",
            "ca.slack-edge.com",
        ],
    },
};
