import users from "../model/userModel.js";
import jwt from "jsonwebtoken"


  
const registerUser = async (req,res)=>{
    console.log("json ")
    const {name,email,password}= req.body
    console.log(name,email,password);
    try{
    const existingUser = await users.findOne({email})
    if(existingUser){
        res.status(406).json('User Already exists !!!')
    
    }else{
    const newUser = new users({
        name,
        email,
        password,
    })
    await newUser.save()
    res.status(200).json(newUser)
     
    }
    }catch(err){
        res.status(401).json(err) 
    
    }
    }

const login = async(req,res)=>{
    console.log("inside login function");
    const {email,password}= req.body
    console.log(email,password);
    try{
        const existingUser = await users.findOne({email,password})
    if(existingUser){
        const token =jwt.sign({userId:existingUser._id},process.env.JWT_SECRET)
    res.status(200).json({
        existingUser,
        token           
    })
    }else{
        res.status(404).json("increct email or password")
    }
    }catch(err){
        res.status(401).json(err)
    }
    }
    
export { registerUser,login}
 