import { createRenderer } from '@vue/runtime-core'
import { Text, Container, Sprite, Texture } from 'pixi.js'

// 创建渲染器
const renderer = createRenderer({
  createElement (type) {
    console.log(type)
    let element
    switch (type) {
      case 'Container':
        element = new Container()
        break
      case 'Sprite':
        element = new Sprite()
        break
      default:
        break
    }

    return element
  },
  insert (el, parent) {
    parent.addChild(el)
  },
  patchProp (el, key, prevVal, nextVal) {
    switch (key) {
      case 'texture':
        el.texture = Texture.from(nextVal)
        break
      case 'onClick':
        el.on('pointertap', nextVal)
        break
      default:
        el[key] = nextVal
        break
    }
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
