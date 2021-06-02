const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

var hbs = require('handlebars');
//set view engine of handler bars
app.set('view engine', 'hbs');


let tasks = []
app.get('/', (req, res) => {
    //taskList = tasks.map(t => `<li> ${t}</li>`).join('\n')
    //sending data in index.html file
    res.render("index", {
        title: 'Task Manager',
        tasks: tasks
    })
})


app.post('/', (req, res) => {
    if (req.body.newtask !== '')
        tasks.push(req.body.newtask);
    res.redirect('/');
})

app.listen(4000, () => {
    console.log("server started at http://localhost:4000 ")
})