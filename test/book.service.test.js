const BookService = require("../book/book.service");
const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;

describe("book service test", () => {
  it("has a module", () => {
    expect(BookService).to.not.be.undefined;
  });

  describe("book service test", () => {
    it("list books", async () => {
      const MockModel = {
        find: sinon.spy(),
      };
      const bookService = BookService(MockModel);
      bookService.listBooks();

      const expected = true;
      const actual = MockModel.find.calledOnce;
      expect(actual).equal(expected);
    });
  });

  describe("addBook book service test", () => {
    it("add book", async () => {
      let title;
      let author;
      let rating;
      const save = sinon.spy();

      const MockModel = function (data) {
        title = data.title;
        author = data.author;
        rating = data.rating;
        return { ...data, save };
      };

      const bookService = BookService(MockModel);
      bookService.addBook("title", "author", 5);

      expect(save.calledOnce).equal(true);
      expect(title).equal("title");
      expect(author).equal("author");
      expect(rating).equal(5);
    });
  });
});
