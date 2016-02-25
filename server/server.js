var express = require('express')
var fs = require('fs')
var path = require('path')
var handlebars = require('handlebars')  // is that ok joseph?

var server = express()

server.use(express.static(path.join(__dirname, '../client')))
// server.set('views', (path.join(__dirname, '../views')))
// server.set('view engine', 'handlebars')

var bogusData = { "fruit": "apple" }


// routes

server.get('/', function (req, res) {
  fs.readFile(__dirname + '/../data/db.json',  'utf8', function (err, data) {
      console.log(data)
      res.send(JSON.parse(data))
  })
        // res.send("hello world")
})

server.get('/books', function (req, res) {
  fs.readFile(__dirname + '/../data/db.json',  'utf8', function (err, data) {
      console.log("in /books")
      res.send("in /books")
  })
})

server.get('/books/read', function (req, res) {
  fs.readFile(__dirname + '/../data/db.json',  'utf8', function (err, data) {
      console.log("in /books/read")
      res.send("in /books/read")
  })
})

server.get('/books/unread', function (req, res) {
  fs.readFile(__dirname + '/../data/db.json',  'utf8', function (err, data) {
      console.log("/books/unread")
      res.send("/books/unread")
  })
})



module.exports = server
