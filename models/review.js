const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const reviewSchema=new Schema({
    comment:String,
    rating:{
        type:Number,
        min:[1,"Too low!"],
        max:[5,"Too high!"]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

module.exports=mongoose.model("Review",reviewSchema);