const express=require("express");
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const app=express();
app.use(express.json());
async function connectDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/myDB6");
        console.log("DB connected successfully ✅");
    }
    catch(error){
        console.log("error :",error);
        process.exit(1);
    }
}
connectDB();
const userSchema=new mongoose.Schema({
    name:String,
    password:String,
    email:{
        type:String,
        unique:true
        
    }
});
const User= mongoose.model("Student",userSchema);

app.post("/signup",async(req,res)=>{
  const {name,email,password}=req.body;//object destructuring
  const exist=await User.findOne({email});
  if(exist){
   return res.send("user already exist");
  }
  const hashedPassword=await bcrypt.hash(password,10);
  const user=new User({name,email,password:hashedPassword});
  await user.save();
  res.send("User signup sucessfully✅");

})

app.listen(3000);

app.post("/login",async)

const express = requiere("express");
const mongoose = requiere("mongoose");
const jwt = requiere("jsonwebtoken");       
const bcrypt = requiere("bcrypt");
const app = express();
app.use(express.json());        
async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/myDB6");
        console.log("DB connected successfully ✅");
    } catch (error) {
        console.log("error :", error);
        process.exit(1);
    }

}
connectDB();
const userSchema = new mongoose.Schema({
    name: String,                   
    password: String,
    email: {
        type: String,
        unique: true                    
        connectDB();
    }
});
const User = mongoose.model("Student", userSchema);                         


app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;                 

    const exist = await User.findOne({ email
    });     
    if (exist) {                        
        return res.send("user already exist");
    }   
    catch(error ){
        console.log("error:",error );
        res.status (500).send("Internal Server Error");     
        
    }