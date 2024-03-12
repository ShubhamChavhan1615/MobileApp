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

const ContactUsData = new mongoose.Schema({
    fname : {
        type: String,
        required: true
    },
    lname :{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
})

 const RegisterDatas = mongoose.model("RegisterUser", RegisterData);
 const ContactUsDatas = mongoose.model("ContactUsData", ContactUsData);

export default  RegisterDatas
