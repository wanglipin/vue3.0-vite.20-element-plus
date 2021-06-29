/*
 * @Author: O_Pin
 * @Date: 2021-06-29 10:38:53
 * @LastEditTime: 2021-06-29 10:51:09
 */
import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx' // jsx插进
import { resolve } from 'path'
import { defineConfig } from 'vite'
import viteSvgIcons from 'vite-plugin-svg-icons' // 引入svgloader
// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  // optimizeDeps: {
  //   include: [''] // ?默认情况下，不在 node_modules 中的，链接的包不会被预构建。使用此选项可强制预构建链接的包。
  // },
  resolve: { //? 导入文件时，可以忽略文件类型,下边类型是vite默认的设置
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/index.scss";` // 配置公共样式
      }
    }
  },
  plugins: [
    vue(),
    viteSvgIcons({
      // 配置路劲在你的src里的svg存放文件
      iconDirs: [resolve(process.cwd(), 'src/static/svg')],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  alias: {
    '@': resolve(__dirname, '.', 'src')
  },
  server: {
    // port: 6666,
    open: true,
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    },
    cors: true, // 为开发服务器配置 CORS。默认启用并允许任何源，传递一个 选项对象 来调整行为或设为 false 表示禁用。
  },
  build: {
    base: '/',
    target: 'modules',
    outDir: 'dist',
    assetsDir: 'static',
    assetsInlineLimit: 4096,//?默认值
    cssCodeSplit: true, //?启用/禁用CSS代码拆分。启用后，在异步块中导入的CSS将内联到异步块本身中，并在加载块时插入。如果禁用，则整个项目中的所有CSS都将提取到一个CSS文件中.
    sourcemap: false,
    minify: 'terser' //?默认terser/esbuild/false
  }
})
