var AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  baseUrl: process.env.EGG_SERVER_ENV==='prod'?'/public/': 'http://localhost:7001/',
  outputDir: 'app/public',
  configureWebpack: {
    plugins: [
      new AssetsPlugin({
        filename: 'config/manifest.json',
        prettyPrint: true,
        fullPath: true, 
      })
    ]
  }
}
