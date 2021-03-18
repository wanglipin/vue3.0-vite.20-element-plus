
import 'element-plus/lib/theme-chalk/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import eleUse from './element';
import i18n from './lang/i18n';
import router from './router';

const app = createApp(App)
app.use(i18n)
app.use(router)
eleUse(app)
app.mount('#app')
