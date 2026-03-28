const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const redis = require('../config/cache');


const registerUser = async (req, res) => {
    const {username,email,password} = req.body;

    const isAlreadyRegistered = await userModel.findOne({
        $or:[
            {email},
            {username}
        ]
    })

    if(isAlreadyRegistered){
        return res.status(400)
        .json({
            message:"User with the same email or username already exists"
        })
    }

    const hash = await bcrypt.hash(password,10);

    const user = await userModel.create({
        username,
        email,
        password:hash
    })

    const token = jwt.sign(
        {
            id:user._id,
            username:user.username,
        },
        process.env.JWT_SECRET,
        {
            expiresIn:'3d'
        }
    )

    res.cookie("token", token,{
        httpOnly:true,
        secure:true,
        sameSite:"none"
    })

    return res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })
}

const loginUser = async (req, res) => {
    const {email,username,password} = req.body;

    const user = await userModel.findOne({
        $or:[
            {email},
            {username}
        ]
    })

    if(!user){
        return res.status(400)
        .json({
            message:"Invalid credentials"
        })
    }

    const isPasswordValid = await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return res.status(400)
        .json({
            message:"Invalid credentials"
        })
    }

    const token = jwt.sign(
        {
            id:user._id,
            username:user.username
        },
        process.env.JWT_SECRET,
        {
            expiresIn:'3d'
        }
    )

    res.cookie("token", token,{
        httpOnly:true,
        secure:true,
        sameSite:"none"
    })

    return res.status(200).json({
        message: "User logged in successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })

}

const getme = async (req,res) => {
    const user = req.user.id;

    const isUserExits = await userModel.findById(user);

    if(isUserExits){
        return res.status(200).json({
            message:"User Sucessfully fetched",
            user:{
                id:isUserExits._id,
                username:isUserExits.username,
                email:isUserExits.email
            }
        })    
    }
}

const logoutUser = async (req,res) => {

    const token = req.cookies.token;

    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none"
    });

    const expiresIn = 60 * 60;
    await redis.setex(token, expiresIn, 'blacklisted');

    return res.status(200).json({
        message:"User logged out successfully"
    })
}



module.exports = {
    registerUser,
    loginUser,
    getme,
    logoutUser
}
