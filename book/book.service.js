const addBook = (Book) => (title, author, rating) => {
  if (!title || !author || !rating)
    throw new Error(
      "Missing Data. Please provide values for title, author, and rating."
    );
  const book = new Book({ title, author, rating });
  return book.save();
};

const listBooks = (Book) => () => {
  return Book.find({});
};

module.exports = (Book) => {
  return {
    addBook: addBook(Book),
    listBooks: listBooks(Book),
  };
};
