<template>
  <section>
    <h2>{{ state.count }}</h2>
    <p>{{state.double}}</p>
    <button @click="increment">add</button>
    <span class="side">{{a}}</span>
    {{count2}}
  </section>
</template>

<script>
import {h, reactive, computed, watchEffect, ref, onMounted } from 'vue'
export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => {
        return state.count * 2
      })
    })
    
    const count2 = ref(0)
    const a = computed(() => {
        return state.count * 2
      })
    function increment () {
      state.count++
      count2.value++
    }
    onMounted(() => {
      console.log('component is mounted!')
    })
    watchEffect(() => {
      // console.log(state.count)
      console.log(22)
    })
    return () => h('div', [state.double, state.count])
  },
};
</script>

<style>
body {
  padding: 50px;
  color: #42b983;
  text-align: center;
}
</style>
