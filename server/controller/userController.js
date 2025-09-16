import { getSystemErrorMessage } from "util"
import User from "../model/userModel.js"

export const create = async(requestAnimationFrame, res) =>{
    try{
        const newUser = new User(req.body);
        const {email} = newUser;

        const userExist = await User.fidOne({email});
        if(userExist){
            return res.status(400).jason({message: "User already exists."});
        }
        const savedData = await newUser.save();
        res.status(200).json(savedData);
    }catch (error){
        res.status(500).jason({getSystemErrorMessage:error.message})
    }
};