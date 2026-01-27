const http = require ('http');

const server = http.createServer((req,res) =>{
    res.end("Hello world");

})
server.listen(8000,() =>{
    console.log('server is running at address http://localhost:8000');
});