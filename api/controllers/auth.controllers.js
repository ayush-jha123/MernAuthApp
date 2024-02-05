import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
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