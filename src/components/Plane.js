import { defineComponent, h, reactive, watch, onMounted, onUnmounted } from 'vue'

import plane from '../assets/plane.png'
export default defineComponent({
  props: ['x', 'y'],
  setup (props, ctx) {
    const handleAttack = (e) => {
      console.log(e.code)
      if (e.code === 'Space') {
        ctx.emit('attack', point)
      }
    }
    onMounted(() => {
      window.addEventListener('keydown', handleAttack)
    })
    onUnmounted(() => {
      window.removeEventListener('keydown', handleAttack)
    })
    const point = reactive({
      x: props.x,
      y: props.y
    })
    watch(props, val => {
      console.log(23)
      point.x = props.x
      point.y = props.y
    })
    return {
      point
    }
  },
  render (ctx) {
    return h('Container', { x: ctx.point.x, y: ctx.point.y }, [
      h('Sprite', { texture: plane })
    ])
  }
})
