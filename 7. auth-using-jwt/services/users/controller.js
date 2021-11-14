const userService = require("./service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

// sign up
const create = async (req,res)=>{
    try{
        let {name,email,password,isAdmin} = req.body;

        if(!name || !email || !password)
            return res.status(400).json({
                "error" : "All fields are required : name, email, password"
            })
        
        name = name.trim();
        email = email.trim();
        isAdmin = isAdmin? isAdmin==true?true:false : false;
        const user  = await userService.getUserByEmail(email);
        if(user && user.length>=1)
            return res.status(400).send("User with this email Already exists.");
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        await userService.createUser({name,email,password:hashedPassword,isAdmin});
        
        const token = jwt.sign({
            userId:user.id,
            email
        },config.get("JWT_KEY"));
        
        return res.header("x-auth-token",token).send({name,email});
    }catch(err){
        return res.status(404).json({
            error:err
        })
    }
}


const login = async (req,res)=>{
    try{
        let {email,password} = req.body;
        
        if(!email || !password)
            return res.status(401).json({
                "error" : "All fields are required : email, password"
            })
        email = email.trim();
        const [user]  = await userService.getUserByEmail(email);
        if(!user)
            return res.status(400).send("Invalid email or password");
        
        const validPassword = await bcrypt.compare(password,user.password);
        if(!validPassword) return res.status(400).send("Invalid email or password");
        const token = jwt.sign({
            userId:user.id,
            email,
            isAdmin:user.isAdmin
        },config.get("JWT_KEY"));

        return res.status(200).send({"token":token})
    }catch(err){
        return res.status(404).json({
            error:err
        })
    }
}

const getAllUsers = async (req,res)=>{
    try{
        
        const result = await userService.getAllUsers();

        return res.status(200).json(result);
    }catch(err){
        return res.status(404).json({
            error : err
        })
    }
}

const getUser = async(req,res)=>{
    try{
        
        const result = await userService.getAllUsers();

        return res.status(200).json(result);
    }catch(err){
        return res.status(404).json({
            error : err
        })
    }
}

module.exports = {
    getAllUsers,
    create,
    login,
    getUser
}
