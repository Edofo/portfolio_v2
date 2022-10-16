module.exports = {
    reactStrictMode: true,
    compilerOptions: {
        baseUrl: ".",
        paths: {
            "@utils/*": ["utils/*"],
            "@components/*": ["components/*"],
            "@pages/*": ["pages/*"],
            "@styles/*": ["styles/*"],
        },
    },
    images: {
        domains: ["assets.vercel.com"],
        formats: ["image/avif", "image/webp"],
    },
};
