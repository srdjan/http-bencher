const http = require('http')

var myArgs = process.argv.slice(2)
var port = Number(myArgs[0])
console.log('Port: ', port)

http
  .createServer((req, res) => {
    res.end('Hello, World!')
  })
  .listen(port)
