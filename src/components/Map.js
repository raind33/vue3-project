import { defineComponent, h, ref } from 'vue'
import map from '../assets/map.jpg'
import { getGame } from '../Game'
export default defineComponent({
  setup () {
    const mapHeight = 1080
    const mapY1 = ref(0)
    const mapY2 = ref(-mapHeight)
    const speed = 1
    getGame().ticker.add(() => {
      mapY1.value += speed
      mapY2.value += speed

      if (mapY1.value >= mapHeight) {
        mapY1.value = -mapHeight
      }
      if (mapY2.value >= mapHeight) {
        mapY2.value = -mapHeight
      }
    })
    return {
      mapY1,
      mapY2
    }
  },
  render (ctx) {
    return h('Container', [
      h('Sprite', { texture: map, y: ctx.mapY1 }),
      h('Sprite', { texture: map, y: ctx.mapY2 })
    ])
  }
})
