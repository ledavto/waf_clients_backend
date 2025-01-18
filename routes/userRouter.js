const express = require("express");
const {
  addUser,
  fetchUsers,
  fetchBussinesUsers,
  fetchUserById,
  deleteUser,
  updateUser,
} = require("../controllers");

const userRouter = express.Router();

userRouter
  .post("/", addUser)
  .get("/", fetchUsers)
  .get("/bussines", fetchBussinesUsers)
  .get("/id/:id", fetchUserById)
  .delete("/:id", deleteUser)
  .patch("/:id", updateUser);

module.exports = userRouter;
