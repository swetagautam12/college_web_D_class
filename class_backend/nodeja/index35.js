const express=require("express");
const app=express();

app.use((req,res,next)=>{
    console.log(`request URL: ${req.url}`);
    console.log("this middleware will run for every request ");
    next();
});

app.get("/",(req,res)=>{
    res.send("this is my home page");
});

app.get("/about",(req,res)=>{
    res.send("this is my about page");
});

app.get("/contact",(req,res)=>{
    res.send("this is my contact page");
});

app.use((req,res,next)=>{
    res.status(404).send("404 error page not found");
    next();
});

app.listen(3000);




















