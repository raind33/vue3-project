import type { App } from 'vue'
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElTabPane,
  ElAside,
  ElTabs,
  ElHeader,
  ElMain,
  ElContainer,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElAvatar,
  ElDropdown,
  ElDropdownItem
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
  ElAside,
  ElHeader,
  ElMain,
  ElContainer,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElAvatar,
  ElDropdown,
  ElDropdownItem,
  ElLink
]

export default (app: App) => {
  components.forEach(component => {
    app.use(component)
  })
}
