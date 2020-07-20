const fastify = require('fastify')()
const fs = require('fs')

var myArgs = process.argv.slice(2)
var port = Number(myArgs[0])
console.log('Port: ', port)

fastify.get('/', (req, reply) => {
  reply.send('Hello, world!')
})

fastify.get('/small', (req, reply) => {
  fs.readFile('./jsons/example1.json', 'utf8', function (err, data) {
    if (err) {
      return console.log(err)
    }
    reply.send(data)
  })
})

fastify.get('/big', (req, reply) => {
  fs.readFile('./jsons/example2.json', 'utf8', function (err, data) {
    if (err) {
      return console.log(err)
    }
    reply.send(data)
  })
})

fastify.listen(port, (err, address) => {
  if (err) {
    fastify.log.info(`Error: ${err}`)
    throw err
  }
})
