import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utilis/error.js";
import jwt from "jsonwebtoken";
// import { errorHandler } from "../utilis/error.js";
export const signup=async (req,res,next)=>{
    const {username,email,password}=req.body;
    const hashedPassword=bcryptjs.hashSync(password,10);//if only hash used add await 
    const newUser=new User({username,email,password:hashedPassword});
    //we don't use username:username as after ES7 if key and value has same name we can write only one.
    try {
        await newUser.save();
        res.status(201).json({message:'User is authenticated succesfully'});
    } catch (error) {
        // res.status(500).json(error.message);
        // next(errorHandler);
        next(error);
    }
}

export const signin=async(req,res,next)=>{
    const {email,password}=req.body;
    try {  
        const validUser=await User.findOne({email});
        if(!validUser) return next(errorHandler(404,'User not found'));
        const validPassword=bcryptjs.compareSync(password,validUser.password);
        if(!validPassword) return next(errorHandler(401,'wrong credentials'));
        const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET)
        const {password:hashedPassword,...rest}=validUser._doc;//_doc is standard
        const expiryDate=new Date(Date.now()+3600000);//1hour
        res.cookie('access_token',token,{httpOnly:true,expires:expiryDate}).status(200).json(rest);
    } catch (error) {
        next(error);
    }
}