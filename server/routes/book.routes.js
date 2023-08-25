const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');


router.post('/post-book', bookController.postBook);


router.get('/get-books', bookController.getBooks);


router.post('/like-book/:bookId', bookController.likeBook);

module.exports = router;
