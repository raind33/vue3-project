<template>
  <div class='tan_box'>
    <ul>
      <li
        v-for='(item,index) in dataList'
        :key='index'
        :style="{height:liHeight+'px'}"
      >
        <transition-group
          :name='"list"+index%3'
          tag='div'
          :key='index'
          @after-enter="afterEnter"
          @before-enter="beforeEnter"
        >
          <div
            class="transition_box"
            v-for='v in item'
            :key='v.id'
          >
            <slot :data="v"></slot>
          </div>
        </transition-group>
      </li>
    </ul>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'tan-mu',
  data () {
    return {
      dataList: [],
      initData: null,
      enterIndex: 0,
      leaveIndex: 0
    }
  },
  props: {
    liNum: {
      type: Number,
      default: 5
    },
    liHeight: {
      type: Number,
      default: 50
    },
    data: {
      type: Array,
      default () {
        return []
      },
      required: true
    }
  },
  watch: {
    data: {
      immediate: true,
      handler (val) {
        this.initData = JSON.parse(JSON.stringify(val))
      }
    },
    liNum: {
      immediate: true,
      handler (val) {
        for (let i = 0; i < val; i++) {
          this.dataList.push([])
        }
      }
    }
  },
  mounted () {
    this.move()
  },
  methods: {
    beforeEnter () {
      setTimeout(() => {
        this.dataList[this.leaveIndex % this.liNum].shift()
        this.leaveIndex++
      }, 15000)
    },
    afterEnter () {
      console.log('wanbi')
    },
    move () {
      this.timer = setInterval(() => {
        if (this.enterIndex >= this.initData.length) {
          return
        }
        this.dataList[this.enterIndex % this.liNum].push(
          this.initData[this.enterIndex]
        )
        this.enterIndex++
      }, 700)
    }
  },
  destroyed () {
    clearInterval(this.timer)
  },
  components: {}
}
</script>
<style lang="less">
.tan_box {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    vertical-align: middle;
    li {
      position: relative;
      margin: 10px 0;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .transition_box {
        position: absolute;
        top: 0;
        height: 100%;
        left: 110%;
        overflow: hidden;
        white-space: nowrap;
      }
      .list0-enter-active {
        transition: left 15s linear;
      }
      .list1-enter-active {
        transition: left 10s linear;
      }
      .list2-enter-active {
        transition: left 12s linear;
      }
      .list0-enter-to,
      .list1-enter-to,
      .list2-enter-to {
        left: -100%;
      }
    }
  }
}
</style>
