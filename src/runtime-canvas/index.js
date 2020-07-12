import { createRenderer } from '@vue/runtime-core'
import { Graphics, Text } from 'pixi.js'

// 创建渲染器
const renderer = createRenderer({
  createElement (type) {
    let element
    if (type === 'circle') {
      element = new Graphics()
      element.beginFill(0xff0000, 1)
      element.drawCircle(0, 0, 100)
      element.endFill()
    }

    return element
  },
  insert (el, parent) {
    parent.addChild(el)
  },
  patchProp (el, key, prevVal, nextVal) {
    el[key] = nextVal
    console.log(el, key, prevVal, nextVal)
  },
  setElementText (node, text) {
    node.addChild(new Text(text))
  },
  createText (text) {
    return new Text(text)
  },
  // 添加注释
  createComment () {},
  // 获取父节点
  parentNode () {},
  // 获取兄弟节点
  nextSibling () {},
  // 删除节点
  remove () {}
})

export function createApp (rootComponent) {
  return renderer.createApp(rootComponent)
}
