/*
 * @Author: O_Pin
 * @Date: 2021-06-29 10:38:53
 * @LastEditTime: 2021-07-07 17:17:30
 */

/**
 * @description: 开发模式
 */
export const devMode = 'development';

 /**
  * @description: 生产模式
  */
export const prodMode = 'production';


export const getEnv = (): string  => import.meta.env.MODE; // 获取环境（开发环境 或者 生产环境）

/**
 * @description: 是否是开发模式
 * @param {type}
 * @returns:
 * @example:
 */
 export const isDevMode = (): boolean => import.meta.env.DEV;

 /**
  * @description: 是否是生产模式模式
  * @param {type}
  * @returns:
  * @example:
  */
 export const isProdMode = (): boolean => import.meta.env.PROD;
