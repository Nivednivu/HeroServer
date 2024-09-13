import mongoose from "mongoose"

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
    // phone:{
    //     type:Number,
    //     required:true
    // },
    // description:{
    //     type:String,
    //     required:true
    // }
     
})

const admins= mongoose.model("admins",adminSchema)
export default admins