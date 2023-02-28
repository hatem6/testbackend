const express = require("express");
const app = express();
const mongoose = require('mongoose')
const UserModel = require('./models/Users')

require("dotenv").config();
//import cors to connect the backend with react


app.use(express.json()); // if you don't do this any post will be error

mongoose.connect("mongodb+srv://hatem:hatem123@cluster0.7dr2uap.mongodb.net/hatouma?retryWrites=true&w=majority");

app.get("/getUsers", (req, res) => {
     UserModel.find({}, (err,result) => {
        if (err) {
            res.json(err);
        }
        else{
            res.json(result);
        }

     })
})

app.post("/createUser", async (req, res) =>{
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(user)
});


app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY");
});