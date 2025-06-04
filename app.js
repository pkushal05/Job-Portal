const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = 3000;

const userModel = require("./models/user");

mongoose.connect("mongodb://127.0.0.1:27017/JobPortal");
console.log("Database is connected!");


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/', async (req, res) => {

    let { name, lastName, email, password } = req.body;

    let user = await userModel.create({
        name,
        lastName,
        email,
        password
    });

    res.send(user);
})

app.listen(PORT, () => {
    console.log("Server is running!");
});