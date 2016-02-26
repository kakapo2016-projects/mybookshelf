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
  fs.readFile(dataPath, 'utf8', function (err, data) {
    console.log('query', req.query)
      var books = JSON.parse(data)
      console.log('books', books)
      console.log('viewpath', viewPath)
      res.render('home', {books: books})
  })
        // res.send("hello world")
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
