const mongoose =  require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },

});

//  users is the table of database

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;