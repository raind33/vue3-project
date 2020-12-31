<template>
  <div class="dy_box">
    <div
      class="list_box"
      :style="{transform:`translateY(${y}px)`}"
      :class="{animateClass:flag}"
    >
      <div
        class="video_box"
        v-for='(item,index) in list'
        @touchstart='start'
        @touchmove='move'
        :key="index"
        @touchend='end($event,index)'
      >
        <video
          controls
          :src="item.src"
          class='video'
          :muted="item.muted"
          loop
          ref='video'
          :autoplay="index ==0 ? true : false"
        ></video>
        <div class="content_box">
          <p class=title>标题{{index}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const v1 = require('../assets/video/1.mp4')
const v2 = require('../assets/video/2.mp4')
const v3 = require('../assets/video/3.mp4')
const v4 = require('../assets/video/4.mp4')
const v5 = require('../assets/video/5.mp4')
const v6 = require('../assets/video/6.mp4')

const clientY =
  document.body.clientHeight || document.documentElement.clientHeight

export default {
  name: 'dy',
  data () {
    return {
      list: [
        {
          id: Math.random(),
          muted: true,
          src: v1
        },
        {
          id: Math.random(),
          muted: true,
          src: v2
        },
        {
          id: Math.random(),
          muted: true,
          src: v3
        },
        {
          id: Math.random(),
          muted: true,
          src: v4
        },
        {
          id: Math.random(),
          muted: true,
          src: v5
        },
        {
          id: Math.random(),
          muted: true,
          src: v6
        },
        {
          id: Math.random(),
          muted: true,
          src: v1
        },
        {
          id: Math.random(),
          muted: true,
          src: v3
        }
      ],
      y: 0, // 用来控制向上移动的距离
      flag: false
    }
  },
  methods: {
    start (e) {
      this.startY = e.touches[0].pageY
      this.startMoveY = this.y // 表示在当前这次移动之前 已经一激动了多少了
      this.flag = false
    },
    move (e) {
      const moveY = e.touches[0].pageY - this.startY
      this.y = moveY + this.startMoveY
    },
    end (e, n) {
      // 这就是 松手的时候 移动的距离
      const endY = e.changedTouches[0].pageY - this.startY
      if (Math.abs(endY) < clientY / 4) {
        // 没划过去
        this.y = this.startMoveY
      } else {
        // 滑过去了
        if (endY < 0) {
          // 下一屏
          if (this.list[n + 1]) {
            // 下边还有内容
            this.y = this.startMoveY - clientY
            this.$refs.video[n].pause()
            this.$refs.video[n + 1].play()
          } else {
            this.y = this.startMoveY
            // 下边没有了
          }
        } else {
          // 上一个屏
          if (this.list[n - 1]) {
            // 下边还有内容
            this.y = this.startMoveY + clientY
            this.$refs.video[n].pause()
            this.$refs.video[n - 1].play()
          } else {
            this.y = this.startMoveY
            // 上边没有了
          }
        }
      }

      this.flag = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.dy_box {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .list_box {
    .video_box {
      position: relative;
      width: 100%;
      height: 100vh;
      video {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 10;
        background: #000;
      }
      .content_box {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 20;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0);
        .title {
          position: absolute;
          bottom: 50px;
          color: #fff;
          box-sizing: border-box;
          padding: 20px;
        }
      }
    }
  }
  .animateClass {
    transition: transform 0.2s;
  }
}
</style>
