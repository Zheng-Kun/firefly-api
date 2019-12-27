// import express from 'express'
// import webpackDevServer from 'webpack-dev-middleware'
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const ejs = require('ejs')
const app = express()
const config = require('./webpack.config.dev.js')
const compiler = webpack(config);


// console.log(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  writeToDisk: true
}));
app.use(webpackHotMiddleware(compiler, {
  
}))
// app.use(express.static("public/dev"));
app.set('views', 'public/dev/html')
app.engine('.html', ejs.__express)
app.set('view engine','html')

app.get('/index', function (req, res) {
  res.render('index')
})
app.get('/player', function (req, res) {
  res.render('player')
})
app.get('/hqqfront', function (req, res) {
  res.render('hqqfront')
})
app.get('/hqqback', function (req, res) {
  res.render('hqqback')
})
app.get('/', function (req, res) {
  res.render('index')
})


app.listen(3100, function () {
  console.log('App is listening on port 3100! \n')
})