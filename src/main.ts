
import 'element-plus/lib/theme-chalk/index.css';
// 引入svg插件
import 'vite-plugin-svg-icons/register';
import { createApp } from 'vue';
import App from './App.vue';
import svgIcon from './components/svgIcon/SvgIcoe.vue';
import eleUse from './element';
import router from './router';
import './styles/element-variables.scss';


(async () => {
  const app = createApp(App as any)
  // 挂载svg图标组件
  app.component('svg-icon', svgIcon)
  eleUse(app)
  app.use(router)
  app.mount('#app')
})()



 