const express =require("express");
const cookiesParser = require("cookie-parser");
const app = express();
app.use(cookiesParser());
app.get("/setcookie",(req,res)=>{
    res.cookie("name","vikas")
    res.send("cookie has been set");
});
app.get("/getcookie",(req,res)=>{
    res.send(req.cookies);
});
app.get("/deletecookie",(req,res)=>{
    res.clearCookie("name");
    res.send("cookie has been deleted");
});
