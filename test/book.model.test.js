var mongoose = require("mongoose");
const chai = require("chai");
const expect = chai.expect;

var uri = "mongodb://localhost:27017/testing";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const Book = require("../book/book.model");

describe("Book Model", () => {
  after(async () => {
    await Book.remove({});
    await mongoose.connection.close();
  });

  it("has a module", () => {
    expect(Book).to.not.be.undefined;
  });

  describe("get user", () => {
    it("gets a user", async () => {
      const book = new Book({ title: "title", author: "author", rating: 5 });
      await book.save();

      const foundBook = await Book.findOne({ title: "title" });
      const expected = "title";
      const actual = foundBook.title;
      expect(actual).equal(expected);
    });
  });

  describe("save user", () => {
    it("saves a user", async () => {
      const book = new Book({ title: "title", author: "author", rating: 5 });
      const savedBook = await book.save();

      const expected = "title";
      const actual = savedBook.title;
      expect(actual).equal(expected);
    });
  });
});
