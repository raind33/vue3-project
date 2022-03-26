import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import registerApp from './global'
import 'normalize.css'
import './assets/css/index.less'
import { setupStore } from './store/login/login'

const app = createApp(App)
app.use(registerApp)
app.use(createPinia())
setupStore()
app.use(router)
app.mount('#app')
