module.exports = {
  extends: ['next', 'next/core-web-vitals', 'turbo', 'prettier', '@antfu'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
}
