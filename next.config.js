module.exports = {
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  reactStrictMode: false,
  images: {
    domains: ["localhost"], //나중에 내가 사용할 도메인을 적어줘야하는듯?
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return config;
  },
};
