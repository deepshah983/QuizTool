import mongoose from "mongoose";

const positionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const Position = mongoose.model('positions', positionSchema);

export {Position}