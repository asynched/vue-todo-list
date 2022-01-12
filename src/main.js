import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import Toast, { POSITION } from 'vue-toastification'

import './styles/globals.css'
import 'vue-toastification/dist/index.css'

createApp(App)
  .use(router)
  .use(Toast, {
    position: POSITION.BOTTOM_RIGHT,
    timeout: 3000,
  })
  .mount('#app')
