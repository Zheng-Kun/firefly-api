// import express from 'express'
// import webpackDevServer from 'webpack-dev-middleware'
process.env.NODE_ENV = 'production'

const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const ejs = require('ejs')
const app = express()
// const config = require('./webpack.config.dev.js')
const config = require('./build/webpack.common')({NODE_ENV: 'development'})
const compiler = webpack(config);

const router = require('./routes/all.fe.routes')

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  writeToDisk: true
}));
app.use(webpackHotMiddleware(compiler, {
  
}))


app.set('views', 'public/dev/html')
app.engine('.html', ejs.__express)
app.set('view engine','html')

router(app)

app.listen(3100, function () {
  console.log('App is listening on port 3100! \n')
})