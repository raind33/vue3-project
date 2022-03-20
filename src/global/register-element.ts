import type { App } from 'vue'
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElTabPane,
  ElTabs
} from 'element-plus'
import 'element-plus/dist/index.css'

const components = [
  ElButton,
  ElInput,
  ElTabPane,
  ElTabs,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElLink
]

export default (app: App) => {
  components.forEach(component => {
    app.use(component)
  })
}
