import type { App } from 'vue'
import { ElButton, ElInput } from 'element-plus'
import 'element-plus/dist/index.css'

const components = [ElButton, ElInput]

export default (app: App) => {
  components.forEach(component => {
    app.use(component)
  })
}
