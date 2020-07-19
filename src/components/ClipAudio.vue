<template>
  <div class="wrapper">
    <div>
      <p @click="clip">剪辑：</p>
      <input
        v-model="start"
        type="text"
      >
      <input
        v-model="end"
        type="text"
      >
      <input
        type="file"
        @change="handleFileChange"
      >
    </div>
    <div>
      <p>剪辑前：</p>
      <audio
        ref="audio"
        src="/1.mp3"
        controls
      ></audio>
    </div>
    <div>
      <p>剪辑后：</p>
      <audio
        ref="clipedAudio"
        :src="aduioSrc"
        controls
      ></audio>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { fileToObjectUrl } from './utils'
import axios from 'axios'
export default {
  setup () {
    const state = reactive({
      start: '',
      end: '',
      audio: null,
      clipedAudio: null,
      aduioSrc: ''
    })
    const handleFileChange = e => {
      state.aduioSrc = fileToObjectUrl(e.target.files[0])
    }
    const clip = async () => {
      const worker = new Worker('./ffmpeg.work.js')
      const reponse = await axios({ url: '/1.mp3', responseType: 'arraybuffer' })
      console.log('originBuffer', reponse)
      console.log(parseInt(state.start), parseInt(state.end) - parseInt(state.start))
      const result = await toPromise(
        worker,
        getClipCommand(reponse, parseInt(state.start), parseInt(state.end) - parseInt(state.start))
      )
      console.log('e', result)
      const res = result.data.data.MEMFS[0].data
      const blob = new File([res], 'clip.mp3', { type: 'audio/mpeg' })
      state.aduioSrc = fileToObjectUrl(blob)
      state.clipedAudio.load()
      state.clipedAudio.play()
    }
    return {
      handleFileChange,
      ...toRefs(state),
      clip
    }
  }
}

function getClipCommand (buffer, start = 0, duration = 10) {
  console.log(`-ss ${start} -i input.mp3 ${
      duration ? `-t ${duration} ` : ''
    }-acodec copy output.mp3`.split(' '))
  return {
    type: 'run',
    arguments: `-ss ${start} -i input.mp3 ${
      duration ? `-t ${duration} ` : ''
    }-acodec copy output.mp3`.split(' '),
    MEMFS: [
      {
        data: new Uint8Array(buffer),
        name: 'input.mp3'
      }
    ]
  }
}

function toPromise (worker, info) {
  return new Promise((resolve, reject) => {
    const onSuccess = function (e) {
      switch (e.data.type) {
        case 'done':
          worker.removeEventListener('message', onSuccess)
          console.log(22)
          resolve(e)
          break
        default:
          break
      }
    }
    worker.addEventListener('message', onSuccess)
    info && worker.postMessage(info)
  })
}
</script>

<style lang="less" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 20px;
}
</style>
