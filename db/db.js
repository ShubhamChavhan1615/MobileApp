import mongoose from "mongoose";

mongoose.set('strictQuery', false);

const db = mongoose.connect("mongodb://localhost:27017/MobileApp",{
    // useUnifiedTopology: true,
    // useCreateIndex: true,
})
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log("error is ", err)
})


export default db;
