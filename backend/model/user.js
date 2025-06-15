const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name:String,
    username:String,
    password:String,
})

const user =  mongoose.model("user",userSchema)

module.exports = user