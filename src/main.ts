
import 'element-plus/lib/theme-chalk/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import eleUse from './element';
import router from './router';
import './styles/element-variables.scss';

const app = createApp(App as any)
// app.use(i18n)
app.use(router)
eleUse(app)
app.mount('#app')
 