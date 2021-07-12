/*
 * @Author: O_Pin
 * @Date: 2021-06-29 10:38:53
 * @LastEditTime: 2021-07-18 23:10:26
 */
module.exports = {
	plugins: [
		[
			'import',
			{
				libraryName: 'element-plus',
				customStyleName: (name) => {
					// 由于 customStyleName 在配置中被声明的原因，`style: true` 会被直接忽略掉，
					// 如果你需要使用 scss 源文件，把文件结尾的扩展名从 `.css` 替换成 `.scss` 就可以了
					return `element-plus/lib/theme-chalk/${name}.css`
				}
			}
		]
		//  '@vue/babel-plugin-jsx' // @vue/babel-plugin-jsx插件 这样配置也可以，但是用是vite  所以就配置在vite里
	]
}
