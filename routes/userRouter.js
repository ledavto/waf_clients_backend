const express = require("express");
const { addUser, fetchUsers, fetchUserById } = require("../controllers");

const userRouter = express.Router();

userRouter
  .post("/", addUser)
  .get("/", fetchUsers)
  .get("/id/:id", fetchUserById);

module.exports = userRouter;
