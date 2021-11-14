const jwt = require("jsonwebtoken");
const config = require("config");

const checkAuthentication = async (req,res,next)=>{
    // const {
    //     headers:{authorization}
    // } = req;

    const token = req.header("Authorization");
    if(!token) return res.status(401).send("Access denied : No token provided!");
    try{
        const decoded = jwt.verify(token,config.get("JWT_KEY"));
        
        req.user = decoded;
        return next();
    }catch(err){
        return res.status(401).json({
            "error" : "Token Invalid"
        })
    }
}

module.exports = {
    checkAuthentication
}
