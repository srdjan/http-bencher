const fastify = require('fastify')()
const fs = require('fs')

var myArgs = process.argv.slice(2)
var port = Number(myArgs[0])
console.log('Port: ', port)

function readFile(path) {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(`fs read file error: ${err}`)
    }
    return JSON.parse(data)
  })
}

fastify.get('/', (req, rep) => {
  rep.send('Hello, world!')
})

fastify.get('/small', (req, rep) => {
  const small = readFile('./jsons/example1.json')
  rep.send(small)
})

fastify.get('/big', (req, rep) => {
  const big = require('./jsons/example2.json')
  rep.send(big)
})

fastify.listen(port, (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})
