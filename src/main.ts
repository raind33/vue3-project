import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import registerApp from './global'
import 'normalize.css'
import './assets/css/index.less'
const app = createApp(App)
app.use(registerApp)
app.use(router).use(createPinia()).mount('#app')
console.log(process.env.VUE_APP_BASE_URL)
