import { defineComponent, h } from 'vue'

import bunnyImg from '../assets/bunny-self.png'
export default defineComponent({
  props: ['x', 'y'],
  setup (props) {
  },
  render (ctx) {
    return h('Container', { x: ctx.x, y: ctx.y }, [
      h('Sprite', { texture: bunnyImg })
    ])
  }
})
