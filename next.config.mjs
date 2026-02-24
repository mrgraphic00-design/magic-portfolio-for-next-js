const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transpilePackages: ['some-package'],
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  images: {
    domains: ['example.com'],
  },
  sassOptions: {
    prependData: `@import "./styles/variables.scss"`,
  },
  headers: async () => {
    return [
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;