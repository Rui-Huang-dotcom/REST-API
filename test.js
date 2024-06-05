const http = require('http');

http.createServer(function (req, res) {
  res.write('Hi!'); 
  res.end(); 
}).listen(8080); 

console.log('The server is running')