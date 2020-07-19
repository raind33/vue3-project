<template>
  <div class="wrapper">
    <div>
      <input
        type="file"
        @change="handlePreviewImg"
        name="upload"
      >
      <img
        width="200"
        :src="imgSrc"
        ref="previewImgRef"
      >
    </div>
    <div>

    <div class="img_clip_view" @mousedown="handleMouseDown" @mouseleave="handleMouseLeave" @mouseup="handleMouseUp" @mousemove="handleMouseMove">
      <canvas width="300" height="300" ref="canvasRef"></canvas>
      <div class="rect"></div>
    </div>
    <div>
      <button @click="changeBiger">变大</button>
      <button @click="changeSmall">缩小</button>
      <button @click="clip">剪切</button>
    </div>
    </div>
    <div>
      <img :src="uploadSrc" alt=""><br/>
      <button @click="upload">上传</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue'
import { useMove } from './useMove'
import { dataURLtoBlob } from './utils'
export default {
  setup () {
    const previewImgRef = ref(null)
    const canvasRef = ref(null)
    const imgSrc = ref(null)
    const uploadSrc = ref(null)
    const canvasImgState = reactive({
      scale: 1,
      lastX: 0,
      lastY: 0
    })
    const handlePreviewImg = e => {
      const reader = new FileReader()
      reader.onload = function () {
        imgSrc.value = reader.result
      }
      reader.readAsDataURL(e.target.files[0])
    }
    const drawImage = (left = canvasImgState.lastX, top = canvasImgState.lastY) => {
      const canvas = canvasRef.value
      const previewImg = previewImgRef.value
      const canvasWidth = canvas.width
      const canvasHeight = canvas.height
      const ctx = canvas.getContext('2d')
      let imgWidth = previewImg.width
      let imgHight = previewImg.height
      if (imgWidth > imgHight) {
        const scale = imgWidth / canvasWidth
        imgWidth = canvasWidth * canvasImgState.scale
        imgHight = imgHight * canvasImgState.scale / scale
      } else {
        const scale = imgHight / canvasHeight
        imgHight = canvasHeight * canvasImgState.scale
        imgWidth = imgWidth * canvasImgState.scale / scale
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(previewImg, (canvasWidth - imgWidth) / 2 + left, (canvasHeight - imgHight) / 2 + top, imgWidth, imgHight)
    }
    const handlers = useMove(drawImage, canvasImgState)
    const changeSmall = () => {
      canvasImgState.scale -= 0.1
      drawImage()
    }
    const changeBiger = () => {
      canvasImgState.scale += 0.1
      drawImage()
    }
    const clip = () => {
      const canvas = canvasRef.value
      const ctx = canvas.getContext('2d')
      const imageData = ctx.getImageData(100, 100, 100, 100)
      const avatarCanvas = document.createElement('canvas')
      avatarCanvas.width = 100
      avatarCanvas.height = 100
      const avatarCtx = avatarCanvas.getContext('2d')
      avatarCtx.putImageData(imageData, 0, 0)
      const url = avatarCanvas.toDataURL()
      uploadSrc.value = url
    }
    // base64转换成file对象上传
    const upload = () => {
      const blob = dataURLtoBlob(uploadSrc.value)
      const request = new XMLHttpRequest()
      const form = new FormData()
      form.append('avatar', blob)
      request.open('POST', 'http://localhost:9000/upload', true)
      request.send(form)
    }
    onMounted(() => {
      previewImgRef.value.onload = function () {
        drawImage()
      }
    })
    return {
      previewImgRef,
      imgSrc,
      handlePreviewImg,
      canvasRef,
      changeSmall,
      changeBiger,
      ...handlers,
      clip,
      uploadSrc,
      upload
    }
  }
}

</script>
<style lang="less" scoped>
.wrapper{
  display: grid;
  margin: 20px;
  grid-template-columns: repeat(3, 1fr);
  .img_clip_view{
    position: relative;
    .rect{
      height: 100px;
      width: 100px;
      background: yellow;
      opacity: 0.3;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  canvas{
    border: 1px dashed red;
  }
}
</style>
