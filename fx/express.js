const express = require('express')
const fs = require('fs')

var myArgs = process.argv.slice(2)
var port = Number(myArgs[0])
console.log('Port: ', port)

const app = express()
app.get('/', function(req, res) {
  res.send('Hello, world!')
})
app.get('/small', (req, res) => {
  fs.readFile('./jsons/example1.json', 'utf8', function (err, data) {
    if (err) {
      return console.log(err)
    }
    res.send(data)
  })
})

app.get('/big', (req, res) => {
  fs.readFile('./jsons/example2.json', 'utf8', function (err, data) {
    if (err) {
      return console.log(err)
    }
    res.send(data)
  })
})

app.listen(port)
