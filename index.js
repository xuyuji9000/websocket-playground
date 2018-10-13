const express = require("express")
const ws = require('ws');
const app = express()

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/ws.html');
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})


var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({port: 40510})

wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('received: %s', message)
  })

  setInterval(
    () => ws.send(`${new Date()}`),
    1000
  )
})
// const wss = new WebSocket.Server({
//   port: 8080,
//   perMessageDeflate: {
//     zlibDeflateOptions: { // See zlib defaults.
//       chunkSize: 1024,
//       memLevel: 7,
//       level: 3,
//     },
//     zlibInflateOptions: {
//       chunkSize: 10 * 1024
//     },
//     // Other options settable:
//     clientNoContextTakeover: true, // Defaults to negotiated value.
//     serverNoContextTakeover: true, // Defaults to negotiated value.
//     serverMaxWindowBits: 10,       // Defaults to negotiated value.
//     // Below options specified as default values.
//     concurrencyLimit: 10,          // Limits zlib concurrency for perf.
//     threshold: 1024,               // Size (in bytes) below which messages
//                                    // should not be compressed.
//   }
// });


// wss.on('open', function open() {
//   wss.send('something');
// });

// wss.on('message', function incoming(data) {
//   console.log(data);
// });
