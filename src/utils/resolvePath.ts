/*
 * @Author: 王立品
 * @Date: 2021-07-08 23:47:46
 * @LastEditTime: 2021-07-12 18:56:24
 * @FilePath: \vue3.0-vite.20-element-plus\src\utils\resolvePath.ts
 */
import path from 'path-browserify' // 浏览器支持的path方法

export function isExternalLink(path: string) {
	return /^(http:|https:|mailto:|tel:)\/\//.test(path)
}

export function resolvePath(basePath: string, routePath: string): string {
	debugger
	if (isExternalLink(routePath)) {
		// 如果是连接就返回连接
		return routePath
	}
	if (isExternalLink(basePath)) {
		return basePath
	}
	return path.resolve(basePath, routePath)
}
