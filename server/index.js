var server = require('./server.js')
var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('server listening on port: ', PORT)
})
