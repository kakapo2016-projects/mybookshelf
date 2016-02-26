var express = require('express')
var fs = require('fs')
var path = require('path')
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')

var server = express()
var dataPath = path.join(__dirname, '../data/db.json')
var viewPath = path.join(__dirname, '/views')

// setup middleware

server.engine('handlebars', exphbs({defaultLayout: 'main'}))
server.set('view engine', 'handlebars')
server.set('views', viewPath)
server.use(bodyParser.urlencoded({ extended: false}))
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../client')))

// routes

server.get('/', function (req, res) {
  console.log("get received on / ")
  fs.readFile(dataPath, 'utf8', function (err, data) {
    var books = JSON.parse(data)
      res.render('home', {books: books})
  })
        // res.send("hello world")
})

server.post('/', function (req, res) {
  console.log('received post req')
  console.log("Body: ", req.body)
  console.log("Query: ", req.query)
  var newBook = req.body
  fs.readFile(dataPath, 'utf8', function (err, data) {
    if (err) return console.log("shit!", err)
      var newData = JSON.parse(data)
    newData.books.push(newBook)
    console.log("book", newData)
   // fs.writeFile(dataPath, newData, function(err, res) {
    // console.log(res)
   // })

  })

  })




server.get('/books', function (req, res) {
  fs.readFile(dataPath, 'utf8', function (err, data) {
      console.log("in /books")
      res.send("in /books")
  })
})



server.get('/books/read', function (req, res) {
  fs.readFile(dataPath,  'utf8', function (err, data) {
      console.log("in /books/read")
      res.send("in /books/read")
  })
})

server.get('/books/unread', function (req, res) {
  fs.readFile(dataPath,  'utf8', function (err, data) {
      console.log("/books/unread")
      res.send("/books/unread")
  })
})

module.exports = server
