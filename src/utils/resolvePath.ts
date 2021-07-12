/*
 * @Author: 王立品
 * @Date: 2021-07-08 23:47:46
 * @LastEditTime: 2021-07-11 22:01:53
 * @FilePath: \vue3.0-vite.20-element-plus\src\utils\resolvePath.ts
 */
import path from 'path'

export function isExternalLink(path: string) {
	return /^(http:|https:|mailto:|tel:)\/\//.test(path)
}

export function resolvePath(basePath: string, routePath: string): string {
	debugger
	if (isExternalLink(routePath)) {
		// 如果是连接就返回连接
		return routePath
	}
	return path.join(basePath, routePath) // 为二级以下菜单拼接父路由地址
}
