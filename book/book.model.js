var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title: String,
  author: String,
  rating: Number,
});

var bookModel = mongoose.model("book", bookSchema, "book");

module.exports = bookModel;
