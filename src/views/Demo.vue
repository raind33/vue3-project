<template>
  <div class="app">
    <p>This is an app.</p>
    <!-- <hello :msg="msg"></hello> -->
    <p>This is {{msg}}</p>
    <button @click="toggle">Toggle msg</button>
  </div>
</template>
<script>
// import hello from './HelloWorld'
export default {
  data () {
    return {
      msg: 'Vue'
    }
  },
  components: {
    // hello
  },
  methods: {
    toggle () {
      // eslint-disable-next-line no-constant-condition
      this.msg = 'Vue' ? 'World' : 'Vue'
    }
  }
}
</script>
