const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],
    resolve: {
      extensions: ['.js', '.json'], // Extensions de fichiers à résoudre automatiquement
      
      fallback: {
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "timers": require.resolve("timers-browserify"),
        "net": require.resolve("net-browserify"), // Ajout de polyfill pour 'net'
        "tls":  require.resolve("tls-browserify"),  // Ajout de polyfill pour 'tls'
        "url": require.resolve("url/"),
        "fs": false,
        "zlib": require.resolve("browserify-zlib"),
        "querystring": require.resolve("querystring-es3"),
        "assert": require.resolve("assert/"),
        "path": require.resolve("path-browserify"),
        "http": require.resolve("stream-http"),
        "vm" : require.resolve("vm-browserify"),
        "process": 'process/browser',
        "buffer": require.resolve("buffer/") // Ajout de polyfill pour 'buffer'
          // Ajoutez d'autres polyfills au besoin
      }
    }
  }
})