/*
 * @Author: 王立品
 * @Date: 2021-07-08 23:47:46
 * @LastEditTime: 2021-07-12 10:08:01
 * @FilePath: \vue3.0-vite.20-element-plus\prettier.config.js
 */
module.exports = {
	printWidth: 80, //一行的字符数，如果超过会进行换行，默认为80
	tabWidth: 2, //一个tab代表几个空格数，默认为80
	useTabs: true, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
	singleQuote: true, //字符串是否使用单引号，默认为false，使用双引号
	semi: false, //行尾是否使用分号，默认为true
	trailingComma: 'none', //是否使用尾逗号，有三个可选值"<none|es5|all>"
	bracketSpacing: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
	// parser: "babylon", //代码的解析引擎，默认为babylon，与babel相同。
	jsxBracketSameLine: false,
	jsxSingleQuote: false,
	endOfLine: 'auto' // 不让prettier检测文件每行结束的格式. linux 和windoes git 拉去代码是空格不一样
};
