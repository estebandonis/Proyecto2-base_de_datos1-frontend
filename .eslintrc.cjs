module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    camelcase: 'off',
    'no-lone-blocks': 0,
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'react/function-component-definition': 'off',
    'arrow-body-style': ['error', 'always'],
    'operator-linebreak': 'off',
  },
}
