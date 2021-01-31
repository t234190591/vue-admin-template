const path = require('path');

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      extensions: ['.mjs', '.mjs', '.js', '.vue'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
        '@api': path.resolve(__dirname, './src/api'),
        '@router': path.resolve(__dirname, './src/router'),
        '@store': path.resolve(__dirname, './src/store'),
        '@views': path.resolve(__dirname, './src/views'),
        '@utils': path.resolve(__dirname, './src/utils'),
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@assets/style/variables.scss";`
      }
    }
  }
}