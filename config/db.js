import mongoose from "mongoose";
export const connectDB  = async () =>{
    await mongoose.connect('mongodb+srv://super:super@cluster0.drklc.mongodb.net/serverhero').then(()=>{
        console.log("db connected");
        
    })
} 