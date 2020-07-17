const express = require('express')

var myArgs = process.argv.slice(2)
var port = Number(myArgs[0])
console.log('Port: ', port)

const app = express()
app.get('/', function(req, res) {
  res.send('Hello, world!')
})
app.get('/small', (req, res) => {
  const small = require('../jsons/example1.json')
  res.send(small)
})

app.get('/big', (req, res) => {
  const big = require('../jsons/example2.json')
  res.send(big)
})

app.listen(port)
