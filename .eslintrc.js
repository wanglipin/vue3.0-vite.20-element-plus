/*
 * @Author: 王立品
 * @Date: 2021-07-08 23:47:46
 * @LastEditTime: 2021-07-12 00:45:52
 * @FilePath: \vue3.0-vite.20-element-plus\.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [  // 要下载下边三个插件哦
    'plugin:vue/vue3-essential', //  vue3的核心規則
    'eslint:recommended', // eslint的建议规则
    '@vue/prettier', // prettier建议规则
    "plugin:prettier/recommended"
    // "@vue/standard" // 使eslint继承standard标准
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'vue',
    'prettier',
    '@typescript-eslint'
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-irregular-whitespace": ["off"], // 取消空格报错
    "no-unused-vars": "off", // 定义了或者声明引入了，但没有使用不报错
    "@typescript-eslint/no-unused-vars": ["off"],//没有使用的参数，不会报错。因为个人觉的把可用的参数写上去 有利于以后的维护。
    "@typescript-eslint/no-empty-function":["off"], // 方法内部没有逻辑书写，不会报错，可以先定义好方法名，方便使用
    "@typescript-eslint/no-explicit-any":["off"], // ts 定义数据类型为any不报错
    'prettier/prettier': 'error',
    'generator-star-spacing': 'off',
    'prettier/prettier': [
      'warn',
      {
        // singleQuore: none,
        // semi: false, // 项目中要不要;（分号）
        trailingComma: 'es5' // 数组和对象要不要加，号
      }
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
