const {
  addUser,
  fetchUsers,
  fetchUserById,
  fetchBussinesUsers,
  deleteUser,
  updateUser,
} = require("./userControllers");
const { createBook, deleteBook, updateBook } = require("./bookControllers");

module.exports = {
  addUser,
  fetchUsers,
  fetchUserById,
  fetchBussinesUsers,
  deleteUser,
  updateUser,
  createBook,
  deleteBook,
  updateBook,
};
