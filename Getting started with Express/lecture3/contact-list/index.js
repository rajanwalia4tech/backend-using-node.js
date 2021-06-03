const express = require('express')
const ejs = require('ejs')
const path = require("path")

const app = express()
const port = 3000
app.set('view engine','ejs');
//app.set('views','views');
app.set('views',path.join(__dirname,'views'))
app.get('/', (req, res) => {
	res.render("home",{title:"Home"})
  //res.send(`Hello World!`)
})

app.get("/about",(req,res)=>{
  res.render("about",{
    title:"about"
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Install : npm install express ejs