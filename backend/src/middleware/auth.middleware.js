const jwt = require('jsonwebtoken');
const redis = require('../config/cache.js');


const authUser = async (req, res, next) => {
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:'token is not provided'
        })
    }

    try{

        const isBlacklistedToken = await redis.get(token)

        if(isBlacklistedToken){
            return res.status(401).json({
                message:'token is blacklisted'
            })
        }

        const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET,
    )
    req.user = decoded;
    next();
    }
    catch(err){
        return res.status(401).json({
            message:'token is not valid'
        })
    }
}


module.exports ={
    authUser
};