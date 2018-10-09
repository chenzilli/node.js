const http = require('http');
http.createSever((req,res)=>{
  res.end('hello world');
}).listen(8080);

