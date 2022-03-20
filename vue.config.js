const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  configureWebpack: config => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
