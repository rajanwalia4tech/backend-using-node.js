const express = require('express')
const ejs = require('ejs')
const path = require("path")

const app = express()
const port = 3000
app.set('view engine','ejs');
//app.set('views','views');
app.set('views',path.join(__dirname,'views')) //views folder to render templates
app.use(express.urlencoded({extended:true})) // middleware to process the request
app.use(express.static('assets'))   // to use static files

var contactList = [
  {
    name:"Rajan",
    class:"MCA"
  },
  {
    name:"Amit",
    class:"MCA"
  },
  {
    name:"Abhay",
    class:"MCA"
  }
] 

// //middleWare 1
// app.use((req,res,next)=>{
//   req.myName = "rajan" // can also add data in the request using middleware
//   console.log("hello");
//   next()
// })

// //middleware2
// app.use((req,res,next)=>{
//   console.log("world");
//   next()
// })

app.get('/', (req, res) => {
// console.log(req.myName);
	return res.render("home",{
    title:"Home",
    contact_list : contactList
  })
  console.log("ehah");
})

app.post('/create-contact',(req,res)=>{
 contactList.push(req.body)  
   res.redirect("/") // to go to the initial route
   //res.redirect("back")  // to go to the previous route from where request came
})

app.get("/delete-contact",(req,res)=>{
    //console.log(req.query.name);
    let name = req.query.name;
    for(let i=0;i<contactList.length;i++){
      if(contactList[i].name == name){
        //console.log(name);
        contactList.splice(i,1)
      }
    }
    res.redirect("/")
})

// app.get("/delete-contact/:name",(req,res)=>{
//   console.log(req.params.name);
// })

app.get("/about",(req,res)=>{
  res.render("about",{
    title:"about"
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})