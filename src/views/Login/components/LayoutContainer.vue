<template>
  <div class="layout">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { Vue } from 'vue-property-decorator'
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
.layout {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  width: 300px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
</style>
