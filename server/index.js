const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

const authController = require('./controllers/authController')
const userController = require("./controllers/userController");

// db connecting
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL);

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static('public/images'))

app.use("/auth", authController);
app.use('/user', userController)


// starting server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server has been started"));
