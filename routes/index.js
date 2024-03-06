import express from "express";
import AppUser from "../model/model.js"; // Make sure to correct the path
const router = express.Router();

router.get("/", (req, res) => {
    res.render("register"); 
});

router.get("/singin", (req, res) => {
    res.render("singin"); 
});

router.post("/singin/home", (req, res)=>{
    let password = req.body.password;
    if(this.email == password) {
        res.render("home")
    }
})

router.post("/home", async (req, res) => {
    try {
        const { username, email, phone, password, cpassword } = req.body;
        if (password === cpassword) {
            const newUser = new AppUser({
                username: username,
                email: email,
                phone: phone,
                password: password,
            });
            const savedUser = await newUser.save();
            res.render("home", {username: username}); // Assuming you have a "home" view
        } else {
            res.send("Passwords do not match");
        }
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(400).send(error.message); // Sending only the error message
    }
});

export default router;
