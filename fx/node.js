const http = require('http')
var url = require('url')
const fs = require('fs')

var myArgs = process.argv.slice(2)
var port = Number(myArgs[0])
console.log('Port: ', port)

function onRequest (req, res) {
  var pathName = url.parse(req.url).pathname

  if (pathName === '/') {
    res.writeHead(200)
    res.write('Hello world!')
    res.end()
  } else if (pathName.includes('/small')) {
    fs.readFile('./jsons/example1.json', 'utf8', function (err, data) {
      if (err) {
        return console.log(`Error, small file: ${err}`)
      }
      res.writeHead(200)
      res.write(data)
      res.end()
    })
  } else if (pathName.includes('/big')) {
    fs.readFile('./jsons/example2.json', 'utf8', function (err, data) {
      if (err) {
        return console.log(`Error, big file: ${err}`)
      }
      res.writeHead(200)
      res.write(data)
      res.end()
    })
  } else {
    console.log(`Route: ${pathName} NOT FOUND`)
  }
}

http.createServer(onRequest).listen(port)
