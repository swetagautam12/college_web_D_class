const fs = require ('fs');
fs.unlike("second.txt",(err)=>{
    if(err){
        console.log("the error comming in the deleting this file is:", err.message);
        return ;
    }
    else{
        
    }
})
