import express from "express";
import AppUser from "../model/model.js"; 
const router = express.Router();

const authenticateUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await AppUser.findOne({ email: email });
        if (!user || user.password !== password) {
            res.status(401).send("Invalid email or password");
        } else {
            
            req.user = user;
            next();
        }
    } catch (error) {
        console.error("Error authenticating user:", error);
        res.status(500).send("Internal Server Error");
    }
};

router.get("/", (req, res) => {
    res.render("register"); 
});

router.get("/signin", (req, res) => {
    res.render("signin"); 
});

router.post("/signin/home", authenticateUser, (req, res) => {
    // If execution reaches here, authentication was successful
    res.render("home", { username: req.user.username });
});

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
            res.render("home", { username: username }); 
        } else {
            res.send("Passwords do not match");
        }
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(400).send(error.message); 
    }
});



export default router;
