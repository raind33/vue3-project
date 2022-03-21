<template>
  <router-view />
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useLoginStore } from './store/login/login'

const store = useLoginStore()
onMounted(() => {
  store.loadLocalLogin()
})
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
