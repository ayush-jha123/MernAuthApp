import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to Mongodb');
}).catch((err)=>{
    console.log(`Error:${err}`);
})

const app=express();
app.use(express.json())
app.listen(3000,()=>{
    console.log('Server running on port 3000')
})

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message||'Internal server error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    })
})  //This is error handling middleware which takes four params by default first one is error