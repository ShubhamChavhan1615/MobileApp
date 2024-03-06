import mongoose from "mongoose";

const RegisterData = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: Number,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

const RegisterDatas = mongoose.model("RegisterUser", RegisterData)

export default RegisterDatas;