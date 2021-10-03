module.exports = {
	env: {
		// 设置js模块化类型
		browser: true,
		es6: true,
		node: true,
		commonjs: true,
		amd: true
	},
	extends: [
		// 'airbnb',
		// 要下载下边三个插件哦
		'plugin:vue/vue3-essential', //  vue3的核心規則
		'eslint:recommended', // eslint的建议规则
		'@vue/prettier', // prettier建议规则
		'plugin:prettier/recommended'
		// "@vue/standard" // 使eslint继承standard标准
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		parser: '@typescript-eslint/parser',
		// parser: 'babel-eslint',
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ['vue', 'prettier', '@typescript-eslint'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-irregular-whitespace': ['off'], // 空格报错
		'no-unused-vars': 'off', //定义了或者声明引入了，但没有使用不报错
		'generator-star-spacing': 'off',
		'prettier/prettier': [
			'warn',
			{
				// singleQuore: none,
				semi: false, // 项目中要不要;（分号）
				trailingComma: 'none' // 数组和对象要不要加,号
			}
		]
	}
}
