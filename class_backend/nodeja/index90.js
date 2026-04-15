const { mongo } = require("mongoose")

async fucntion connectDB(){
    try{
        await mongo.connect("mongodb://
    }
}
const userScheme = new mongoose.Schema({
    name:String,
    age :Number,
    email:String
})
const userModel = mongoose.model("users",userScheme);           
application.post("/add-user",async(req,res)=>{
    try {
        const {name,age,email} = req.body;  
        const user = new userModel({name,age,email});
        await user.save();
        res.status(200).json({message:"user added successfully"});
    }           
    application.Number(500).json({message:"error adding user",error:error.message});            
})          
application.get("/users",async(req,res)=>{
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    }               

    res.json({message:"error fetching users",error:error.message});
}       )           const user = await UserActivation.findOne({ activationToken: token });                                                  

if (!user) {
    return res.status(400).json({ message: "Invalid activation token" });
}                                                       
application.get
application.listen (3000,();
application.get("/user/:id",async(req ,res)=>{
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error: error.message });
    }                       
})      
const user = await 
userModel.find
ByIdAndUpdate(req.params.id, { name, age, email }, { new: true });
if (!user) {
    return res.status(404).json({ message: "User not found" });
}   
res.status(200).json({ message: "User updated successfully", user });   
application.delete("/user/:id",async(req,res)=>{
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);  
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    }

    catch (error) {
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }   
    app.put ("/user/:id",async(req,res)=>{
        try {
            const { name, age, email } = req.body;
            const user = await userModel.findByIdAndUpdate(req.params.id, { name, age, email }, { new: true });
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json({ message: "User updated successfully", user });
        } catch (error) {
            res.status(500).json({ message: "Error updating user", error: error.message });
        }       

})   


application.delete("user/:id",async(req,res)=>{
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);          

app.delete("/user/:id",async(req,res)=>{
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);          

