import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'
import { setupStore } from './store/login/login'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $filters: any
  }
}
const app = createApp(App)

app.use(globalRegister)
app.use(createPinia())
setupStore()
app.use(router)
app.mount('#app')
