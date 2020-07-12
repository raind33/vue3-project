import { defineComponent, h } from '@vue/runtime-core'
export default defineComponent({
  render () {
    return h('circle', { x: 200, y: 200 }, [
      h('circle', { x: 400, y: 400 }),
      'RAIN'
    ])
  }
})
