import mongoose from "mongoose";

mongoose.set('strictQuery', false);

const db = mongoose.connect("mongodb+srv://shubham1615:shubham123@mobileapp.tkbshm4.mongodb.net/?retryWrites=true&w=majority&appName=MobileApp",{
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
