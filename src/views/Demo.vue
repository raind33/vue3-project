<template>
  <div>
    <span>23</span>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld'
export default {
  name: 'Home',
  components: {
    HelloWorld
    // ClipAudio
  },
  setup () {
    return {
    }
  }

}
</script>

<style lang="less" scoped>
</style>
