module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:3080',
          changeOrigin: true
        },
      }
    },
    outputDir: process.env.NODE_ENV === 'production'
        ? '../dist/dist'
        : 'dist'
  }