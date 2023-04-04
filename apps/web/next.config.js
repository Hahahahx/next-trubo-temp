const UnoCSS = require('@unocss/webpack').default

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'mdx',
  ],
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  webpack: (config) => {
    config.cache = false
    config.plugins.push(
      UnoCSS(), // <--
    )
    return config
  },
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
