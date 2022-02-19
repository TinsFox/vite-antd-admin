module.exports = {
  extends: [
    "eslint-config-ali/typescript/react",
    "plugin:prettier/recommended"
  ],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
  plugins: ['prettier'],
  rules: {
    'import/no-cycle': 'off',
    'react/prop-types': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'prettier/prettier': 'error',
  },
};
