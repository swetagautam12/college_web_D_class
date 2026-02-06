const express= require("express");
const  app = express();
app.get("/user/:id",(req,res) =>{
    res.send(`the user had id ${req.params.id}`);

});
app.listen(3000,() =>{
    console.log
})