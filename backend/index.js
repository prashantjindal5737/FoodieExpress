const express= require('express');
const mongoose = require('mongoose');
const app = express();  
const mongoConnect = require('./db');
// const router = require('./Routes/CreateUser');
// const User = require('./model/User.js');
app.use(express.json()); // Middleware to parse JSON requests

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(); // Proceed to the next middleware or route handler
})

const router = require('./Routes/CreateUser.js');
app.use(router);
app.get("/", (req, res) => {
    res.send("API is running");
});
// app.use(router)

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
mongoConnect()
