const { fearless, get, send } = require('@fearless/fearless')

var myArgs = process.argv.slice(2)
var port = Number(myArgs[0])
console.log('Port: ', port)

const helloWorld = get('/', (req, res) => {
  send(res, 200, 'Hello, World!')
})

fearless({
  handlers: [helloWorld],
  port: port
})
