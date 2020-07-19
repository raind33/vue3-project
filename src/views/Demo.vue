<template>
  <ClipImageUpload/>
  <ClipAudio/>
</template>

<script>
import ClipImageUpload from '../components//ClipImageUpload'
import ClipAudio from '../components/ClipAudio'
export default {
  name: 'Home',
  components: {
    ClipImageUpload,
    ClipAudio
  },
  setup () {
    return {
    }
  }

}
</script>

<style lang="less" scoped>
</style>
