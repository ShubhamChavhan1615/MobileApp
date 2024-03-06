import express from "express";
import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import db from "./db/db.js";
import AppUser from "./model/model.js";
import indexRouter from "./routes/index.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 4000;
const hostname = "localhost";
const app = express();

// Set static path for public folder
app.use(express.static(path.join(__dirname, "public")));


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

app.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`);
});
