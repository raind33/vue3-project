import { defineComponent, h } from 'vue'
import startPageImg from '../assets/start_page.jpg'
import startBtn from '../assets/startBtn.png'
export default defineComponent({
  render (ctx) {
    return h('Container', [
      h('Sprite', { texture: startPageImg }),
      h('Sprite', {
        texture: startBtn,
        x: 210,
        y: 500,
        interactive: true,
        onClick () {
          ctx.$emit('clickPage', 'GamePage')
        }
      })
    ])
  }
})
