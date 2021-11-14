const express = require("express");
const app = express();
const config = require("config");
const {connection} = require("./db");

const PORT = config.get("PORT") || 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",require("./routes"));

app.listen(PORT,async (err)=>{
    if(err)
        console.log("Error in starting the server");
    
    await connection.connect((err)=>{
        if(err){
            console.log("Error in connection : ",err);
            return;
        }
        console.log("Mysql connected");
    })
    console.log(`server is started on http://localhost:${PORT} `);
})