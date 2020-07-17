const express = require('express')

var myArgs = process.argv.slice(2)
var port = Number(myArgs[0])
console.log('Port: ', port)

const app = express()
app.get('/', function(req, res) {
  res.send('Hello, world!')
})

app.listen(port)
