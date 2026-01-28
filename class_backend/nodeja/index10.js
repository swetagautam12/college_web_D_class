const http= require("http");
const server =http.createServer((req,res) =>{
    if(req.url=="/"){
        res.end('this is a home page ');

    }else if(req.url =="/about"){
        res.end('this is an about page');

    }else if(req.url =="/contact"){
        res.end('this is contact page');
    }else {
        res.end('404 error page not found');

    }
})
server.listen(8000 ,()=>{
    console.log('server is running at address http://localhost:8000');
});