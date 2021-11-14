const jwt = require("jsonwebtoken");
const config = require("config");

const admin = async (req,res,next)=>{

    const token = req.header("Authorization");
    if(!token) return res.status(401).send("Access denied : No token provided!");
    try{
        const decoded = jwt.verify(token,config.get("JWT_KEY"));
        
        if(!req.user.isAdmin) return res.status(403).send("Access Denied!");
        
        return next();
    }catch(err){
        return res.status(401).json({
            "error" : "Token Invalid"
        })
    }
}

module.exports = {
    admin
}
