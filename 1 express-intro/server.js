const express = require('express');
const app = express()
app.use(express.urlencoded({ extended: true })) // To get form data while making post request
const port = 4444
app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>");
})

app.get('/greet', (req, res) => {
    let person = 'Guest'
    if (req.query.person)
        person = req.query.person
        //console.log(req.url) 
        //console.log(req.query);
    res.send("Good morning " + person)
})

// Using URL path parameter to make url variable
app.get('/:city/:greeting', (req, res) => {
    res.send(req.params.greeting + " TO " + req.params.city)
})


//form making post request
app.post('/greet', (req, res) => {
    let person = 'Guest'
    if (req.body.person)
        person = req.body.person
    res.send("Good Evening " + person)
})


app.get('/form', (req, res) => {
    // send file
    res.sendFile(__dirname + "/files/index.html")
})

// start a server at given port
app.listen(port, () => {
    console.log("Server started")

})