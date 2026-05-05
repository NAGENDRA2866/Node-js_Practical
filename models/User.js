const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose").default;
 

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    favoriteGenre:{
        type:String,
        trim:true,
    },
    bio:{
        type:String,
        trim:true,
    },
    reviewerSince:{
        type:Date,
        default:Date.now
    },
})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User",userSchema);

module.exports = User;