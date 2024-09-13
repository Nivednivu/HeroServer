import admins from "../model/adminModel.js";
import jwt from "jsonwebtoken"


const registeradmin= async (req,res)=>{
    console.log("json ")
    const {name,email,password}= req.body
    console.log(name,email,password);
    try{
    const existingAdmin = await admins.findOne({email})
    if(existingAdmin){
        res.status(406).json('User Already exists !!!')
    
    }else{
    const newAdmi = new admins({
        name,
        email,
        password,
    })
    await newAdmi.save()
    res.status(200).json(newAdmi)
     
    }
    }catch(err){
        res.status(401).json(err) 
    
    }
    }

    const adminlogin = async(req,res)=>{
        console.log("inside login function");
        const {email,password}= req.body
        console.log(email,password);
        try{
            const existingAdmin = await admins.findOne({email,password})
        if(existingAdmin){
            const token =jwt.sign({userId:existingAdmin._id},process.env.JWT_SECRET)
        res.status(200).json({
            existingAdmin,
            token           
        })
        }else{
            res.status(404).json("increct email or password")
        }
        }catch(err){
            res.status(401).json(err)
        }
        }
    

    export  {registeradmin,adminlogin }