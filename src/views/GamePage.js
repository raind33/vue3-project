import { defineComponent, h, reactive, toRefs, onMounted, onUnmounted } from 'vue'
import map from '../components/Map'
import plane from '../components/Plane'
import bullet from '../components/Zidan'
import { getGame } from '../Game'
export default defineComponent({
  setup () {
    const planeInfo = useCreatePlaneInfo()
    // 子弹
    const bullets = reactive([])
    const handleAttack = (info) => {
      bullets.push({ x: info.x + 100, y: info.y })
    }
    getGame().ticker.add(() => {
      bullets.forEach(item => {
        item.y -= 5
      })
    })
    return {
      planeInfo,
      bullets,
      handleAttack
    }
  },
  render (ctx) {
    const renderBullets = () => {
      return ctx.bullets.map(item => {
        return h(bullet, { x: item.x, y: item.y })
      })
    }
    return h('Container', [
      h(map),
      h(plane, { x: ctx.planeInfo.x, y: ctx.planeInfo.y, onAttack: ctx.handleAttack }),
      ...renderBullets()
    ])
  }
})

const useCreatePlaneInfo = () => {
  const planeInfo = reactive({
    x: 150,
    y: 200
  })
  const { x, y } = useMovePlane(planeInfo.x, planeInfo.y)
  planeInfo.x = x
  planeInfo.y = y

  return planeInfo
}
const useMovePlane = (initX, initY) => {
  const speed = 15
  const point = reactive({
    x: initX,
    y: initY
  })
  const handleKeyDown = (e) => {
    switch (e.code) {
      case 'ArrowUp':
        point.y -= speed
        break
      case 'ArrowDown':
        point.y += speed
        break
      case 'ArrowLeft':
        point.x -= speed
        break
      case 'ArrowRight':
        point.x += speed
        break
    }
  }
  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown)
  })
  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
  })

  return toRefs(point)
}
