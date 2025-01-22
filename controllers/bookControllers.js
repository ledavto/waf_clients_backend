const { HttpError, ctrlWrapper } = require("../helpers");

const { Book } = require("../models");

const createBook = ctrlWrapper(async (req, res) => {
  const result = await Book.create({ ...req.body });
  res.status(201).json(result);
});

const fetchBookByUserId = ctrlWrapper(async (req, res) => {
  const { id } = req.params;

  const user = await Book.find({ clientId: id });

  res.status(201).json(user);
});

const deleteBook = ctrlWrapper(async (req, res) => {
  const { id } = req.params;

  const book = await Book.findByIdAndDelete(id);

  res.status(201).json(book);
});

const updateBook = ctrlWrapper(async (req, res) => {
  const { id } = req.params;

  console.log(req.body);
  const book = await Book.findByIdAndUpdate(id, req.body);

  res.status(201).json(book);
});

module.exports = {
  createBook,
  fetchBookByUserId,
  deleteBook,
  updateBook,
};
