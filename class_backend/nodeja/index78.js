const mongoose = require('mongoose');
async function connectDB(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017");
        console.log("connected to database successfully");

    }
    catch (error) {
        console.log("DB connection error :",error);
        process.exit(1);
    }
}
connectDB();