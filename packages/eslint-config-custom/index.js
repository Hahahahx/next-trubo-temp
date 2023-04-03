module.exports = {
  extends: ['next', 'next/core-web-vitals', 'turbo', 'prettier', '@antfu'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'no-console': 'warn',
    'import/export': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
  },
  settings: {
    react: {
      version: '999.999.999', // It will default to "detect" in the future
      // "version": "18.2.0"
    },
  },
}
