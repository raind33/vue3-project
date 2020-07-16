import { defineComponent, h, computed, ref } from '@vue/runtime-core'
import StartPage from './views/StartPage'
import GamePage from './views/GamePage'
export default defineComponent({
  setup () {
    const currentPageName = ref('StartPage')
    const currentPage = computed(() => {
      if (currentPageName.value === 'StartPage') {
        return StartPage
      } else if (currentPageName.value === 'GamePage') {
        return GamePage
      }
    })

    return {
      currentPageName,
      currentPage
    }
  },
  render (ctx) {
    return h('Container', [
      h(ctx.currentPage, {
        onClickPage (val) {
          ctx.currentPageName = val
        }
      })
    ])
  }
})
