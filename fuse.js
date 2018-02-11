const path = require('path')
const { FuseBox, WebIndexPlugin } = require('fuse-box')
const express = require('express')
const fallback = require('express-history-api-fallback')

const fuse = FuseBox.init({
  homeDir: 'src',
  target: 'browser@es2017',
  output: 'dist/$name.js',
  sourceMaps: true,
  plugins: [
    WebIndexPlugin({
      template: 'index.html'
    })
  ]
})
fuse.dev(
  {
    port: 4444
  },
  server => {
    const root = path.resolve('./dist')
    server.httpServer.app.use(express.static(root))
    server.httpServer.app.use(fallback('index.html', { root }))
  }
)

fuse
  .bundle('app')
  .instructions(' > boot.tsx')
  .hmr()
  .watch()
fuse.run()
