const express = require("express");
const {
  createBook,
  fetchBookByUserId,
  deleteBook,
  updateBook,
} = require("../controllers");

const bookRouter = express.Router();

bookRouter
  .post("/", createBook)
  .get("/:id", fetchBookByUserId)
  .delete("/:id", deleteBook)
  .patch("/:id", updateBook);

module.exports = bookRouter;
