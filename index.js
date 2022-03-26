const path = require("path")
var express = require('express')
var app = express()

app.use(express.static(path.join(__dirname,"Public")))

app.get('/', function (req, res) {
res.send("this is main page")

  //res.sendFile(path.join(__dirname, "index.html"))
})
app.get('/contact', function (req, res) {
  res.json({name : "babar", age:"26"})
})
app.get('/about/:url', function (req, res) {
  res.send('hello this is about page  '+ req.params.url)
})
app.listen(3000)