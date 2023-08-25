const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
