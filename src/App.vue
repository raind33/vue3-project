<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  name: 'App',
  components: {
  },
  setup () {
    const state = reactive({
      a: 1,
      b: 2
    })

    return {
      ...toRefs(state)
    }
  }

}
</script>

<style>
</style>
