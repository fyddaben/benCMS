var AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  baseUrl: process.env.EGG_SERVER_ENV==='prod'?'/public/': 'http://bcms.com/',
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
