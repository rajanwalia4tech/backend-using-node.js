const {connection} = require('../../db');
const getAllUsers = ()=>{
    return new Promise((resolve,reject)=>{
        let query = `SELECT *from users`;
        connection.query(query,(err,result,fields)=>{
            if(err)
            reject(err);

            resolve(result);
        })
    })
}

const getUserByEmail = (email)=>{
    return new Promise((resolve,reject)=>{
        let query = `SELECT * from users WHERE email= ?;`
        let values = [email];
        connection.query(query,values,(err,result)=>{
            if(err)
                reject(err);
            resolve(result);
        })
    })
}

const createUser = (payload)=>{
    return new Promise((resolve,reject)=>{
        let query = `INSERT INTO users (name,email,isAdmin,password) VALUES (?,?,?,?);`
        values = [payload.name,payload.email,payload.isAdmin,payload.password];

        connection.query(query,values,(err,result)=>{
            if(err)
                reject(err);
            resolve(result);
        })
    })
}


module.exports = {
    getAllUsers,
    createUser,
    getUserByEmail
}