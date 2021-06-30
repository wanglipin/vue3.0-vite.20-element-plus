module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      jsx: true,
    }
  },
  plugins: [
    'vue',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'generator-star-spacing': 'off',
    'prettier/prettier': [
      'warn',
      {
        // singleQuore: none,
        // semi: false,
        trailingComma: 'es5'
      }
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
