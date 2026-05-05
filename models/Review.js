const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    bookTitle:{type:String,required:true,trim:true},
    authorName:{type:String,required:true,trim:true},
    rating:{type:Number,min:0,required:true},
    reviewText:{type:String,required:true,trim:true},
    reviewDate:{type:Date,default:Date.now}
})

const Review = mongoose.model("Review",reviewSchema);

module.exports = Review;
 