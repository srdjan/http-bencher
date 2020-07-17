// import { uWS } from 'https://raw.githubusercontent.com/uNetworking/uWebSockets.js/v18.3.0/uws.js'
// import { uWS } from 'uWebSockets.js'
const uWS = require('uwebsockets.js')

var myArgs = process.argv.slice(2)
var port = Number(myArgs[0])
console.log('Port: ', port)

uWS.App().get('/*', (res, req) => {
  res.end('Hello World!');
}).listen(port, (token) => {
  if (token) {
    console.log('Listening to port ' + port);
  } else {
    console.log('Failed to listen to port ' + port);
  }
});


