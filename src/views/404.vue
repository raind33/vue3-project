<template>
  <div class="error-page">
    <div class="notFound">
      <span>啊哦~~~你访问的页面不存在哦</span>
      <span>
        你可以尝试
        <a class="link" @click="$router.go(-1)">返回上一页</a>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class Errors extends Vue {}
</script>

<style lang="scss" scoped>
.error-page {
  height: 100%;
  display: flex;
  .notFound {
    padding: 150px 0;
    overflow: hidden;
    span {
      display: block;
      line-height: 60px;
      font-size: 18px;
      color: #8b7b8b;
      .link {
        color: #5cacee;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>
