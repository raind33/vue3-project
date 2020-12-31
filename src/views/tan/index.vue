<template>
  <div id="app">
    <div class="box">
      <tan-mu
        :liNum='5'
        :liHeight='55'
        :data='list'
        v-slot="{data}"
      >
        <div>
          <h2>{{data}}</h2>
          <h2></h2>
        </div>
      </tan-mu>
    </div>
    <input
      type="text"
      v-model='todo'
      @keydown.enter="fn"
    >
  </div>
</template>

<script>
import TanMu from '@/components/tan'
export default {
  components: {
    TanMu
  },
  name: 'App',
  data () {
    return {
      list: [
        { id: 1, value: '1' },
        { id: 2, value: '2' },
        { id: 3, value: '3' },
        { id: 4, value: '4' },
        { id: 5, value: '5' },
        { id: 6, value: '6' },
        { id: 7, value: '7' },
        { id: 8, value: '8' },
        { id: 9, value: '9' },
        { id: 10, value: '10' },
        { id: 11, value: '11' },
        { id: 22, value: '12' },
        { id: 33, value: '13' },
        { id: 44, value: '14' },
        { id: 55, value: '15' },
        { id: 66, value: '16' },
        { id: 77, value: '17' },
        { id: 88, value: '18' },
        { id: 99, value: '19' },
        { id: 101, value: '20' }
      ],
      todo: ''
    }
  },
  methods: {
    fn () {
      this.list.push({
        id: Math.random(),
        value: this.todo
      })
      this.todo = ''
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 600px;
  height: 400px;
  margin: auto;
  background-color: #eee;
}
</style>
