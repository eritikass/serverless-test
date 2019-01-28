// index.js

const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send(`Hello World![${req.query.test1}][${req.path}][${req.url}]`)
})

app.get('/kala', function (req, res) {
  res.send(`kala - Hello World![${req.query.test1}][${req.path}][${req.url}]`)
})


app.get('/kana', function (req, res) {
  res.send(`kana - Hello World![${req.query.test1}][${req.path}][${req.url}]`)
})

app.get('/kana2', function (req, res) {
  res.send(`kana2 - Hello World![${req.query.test1}][${req.path}][${req.url}]`)
})


module.exports.handler = serverless(app);
