const http = require('http');

const server = http.createServer();

server.on('require',(req,res)=>{
  res.end('hello');
});
server.listen(8080);

