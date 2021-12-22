module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "com2me",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};
