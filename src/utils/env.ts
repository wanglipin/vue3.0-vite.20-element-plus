export function getEnv(): string {
  return import.meta.env.MODE; // 获取环境（开发环境 或者 生产环境）
}
