// import { resolve } from 'path'

export function isExternalLink (path: string) {
  return /^(http:|https:|mailto:|tel:)\/\//.test(path)
}

export function resolvePath (basePath: string, routePath: string) {
  if (isExternalLink(routePath)) { // 如果是连接就返回连接
    return routePath
  }
  return resolve(basePath, routePath) // 为二级以下菜单拼接父路由地址
  // return  basePath + routePath// 为二级以下菜单拼接父路由地址
}
