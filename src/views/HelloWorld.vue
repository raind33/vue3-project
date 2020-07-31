<template>
  <div>
    <span>{{a}}</span>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    const a = ref('a')
    return {
      a
    }
  }
}
</script>
