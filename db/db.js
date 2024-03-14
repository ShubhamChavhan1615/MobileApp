import mongoose from "mongoose";
import 'dotenv/config'
mongoose.set('strictQuery', false);

const db = mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log("error is ", err)
})


export default db;
