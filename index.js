var http = require('http');
var Server = http.Server;
var server = new Server();

server.on('request', function(request, response){
  console.log(request.headers)
  console.log(request.trailers)
  console.log(request.method)
  console.log(request.url)
  request.on('end', function(){
    console.log('end')
  })
  request.on('data', function(chk){
    console.log(chk)
  })
})


server.listen(631)
console.log('listening on 631')
