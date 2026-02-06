const  express = require("express");
const app = express();
app.get("/user/:id",(req,res)=>{
    res.send(`the user has id ${req.params.id}`){
        
    }
})