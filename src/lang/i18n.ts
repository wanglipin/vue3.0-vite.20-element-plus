import { createI18n } from 'vue-i18n'
import messages from './index'


const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'ch',
  messages
})

export default i18n