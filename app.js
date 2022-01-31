"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const BookService = require("./book");

var app = express();

mongoose.Promise = global.Promise;

var uri = "mongodb://localhost:27017/bookstore";
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Allow all CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.get("/listBooks", async function (req, res, next) {
  try {
    const books = await BookService.listBooks();
    res.json(books);
  } catch (e) {
    next(e);
  }
});

app.get("/addBook", async function (req, res, next) {
  const title = req.query.title;
  const author = req.query.author;
  const rating = req.query.rating;

  try {
    const books = await BookService.addBook(title, author, rating);
    res.json(books);
  } catch (e) {
    next(e);
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}!`))
