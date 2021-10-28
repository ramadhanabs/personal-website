module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rule.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};
