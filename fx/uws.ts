import { createRequire } from 'https://deno.land/std/node/module.ts'
const require1 = createRequire(import.meta.url)
const uWS = require1('uWebSockets.js')

var myArgs = process.argv.slice(2)
var port = Number(myArgs[0])
console.log('Port: ', port)

uWS.App().get('/', async (res:any) => {
  res.onAborted(() => res.aborted = true);

  let r = 'Hello World Async!';

  if (!res.aborted) {
    res.end(r);
  }
}).listen(port, (token:any) => {
  if (token) {
    console.log('Listening to port ' + port);
  } else {
    console.log('Failed to listen to port ' + port);
  }
});


