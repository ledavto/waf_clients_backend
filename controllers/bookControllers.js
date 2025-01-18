const { HttpError, ctrlWrapper } = require("../helpers");

const { Book } = require("../models");

const createBook = ctrlWrapper(async (req, res) => {
  const result = await Book.create({ ...req.body });
  res.status(201).json(result);
});

// const fetchUsers = ctrlWrapper(async (req, res) => {
//   // const { id: ownerFarm } = req.params;

//   const listUsers = await User.find({});

//   res.status(201).json(listUsers);
// });

// const fetchUserById = ctrlWrapper(async (req, res) => {
//   const { id } = req.params;

//   const user = await User.findById(id);

//   res.status(201).json(user);
// });

const deleteBook = ctrlWrapper(async (req, res) => {
  const { id } = req.params;

  const book = await Book.findByIdAndDelete(id);

  res.status(201).json(user);
});

const updateBook = ctrlWrapper(async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndUpdate(id, name);

  res.status(201).json(user);
});

module.exports = {
  createBook,
  // cancelBook,
  // fetchUserById,
  deleteBook,
  updateBook,
};
