import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true});// mongo will add time of creation

const User=mongoose.model('User',userSchema);

export default User;