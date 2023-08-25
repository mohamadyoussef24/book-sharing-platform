const Book = require('../models/books.model');

exports.postBook = async (req, res) => {
  try {
    const { name, author, pictureUrl, review } = req.body;

    const newBook = new Book({
      name,
      author,
      pictureUrl,
      review
    });

    await newBook.save();
    res.status(201).json({ message: 'Book posted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.getBooks = async (req, res) => {
  try {
   
    const books = await Book.find();

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.likeBook = async (req, res) => {
  try {
    const bookId = req.params.bookId;

    const book = await Book.findByIdAndUpdate(
      bookId,
      { $inc: { likes: 1 } },
      { new: true }
    );

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
