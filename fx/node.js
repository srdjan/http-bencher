const http = require('http')
var url = require('url')

var myArgs = process.argv.slice(2)
var port = Number(myArgs[0])
console.log('Port: ', port)

http.createServer(onRequest).listen(port)

function onRequest (request, response) {
  var pathName = url.parse(request.url).pathname
  
  var res = 'Hello world!'
  if (pathName.includes('/small')) {
    res = require('../jsons/example1.json')
  }
  else if (pathName.includes('/big')) {
    res = require('../jsons/example2.json')
  }

  response.writeHead(200)
  response.write(JSON.stringify(res))
  response.end()
}

