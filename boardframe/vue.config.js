const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false,
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:3010',
        changeOrigin: true // cross origin 허용
      }
    }
  }
})
