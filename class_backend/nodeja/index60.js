const express = require("express");
const app = express();
app.get("/" ,(req,res) =>{
    res.send("Hello Worl 2")
});

//node --watch index60.js
app.get("/hello",(req,res)=>{
    res.json({"message ":"hello world 2"});
});
app.get("/user/:id",(req,res)=>{
    const id = req.params.id;
    res.json({"userId" : id});
})
app.listen(3000);

app.put("/user/:id",(req,res)=>{
    const id = req.params.id;
    cosnt data = req.body ;
    res.json({
        message:`user with ${id} got update`,
        data
    })
})
app.listen(3000);
app.post("/users",(req,res)=>{
    users.push(req.body);
    res.json(users);

})

app.listen(3000);

