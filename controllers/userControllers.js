const { HttpError, ctrlWrapper } = require("../helpers");

const { User } = require("../models");

const addUser = ctrlWrapper(async (req, res) => {
  // const { id: ownerFarm } = req.params;
  console.log(req.body);
  const { name } = req.body;

  const isUserExists = await User.findOne({ name });

  if (isUserExists) {
    throw HttpError(409, `User "${name}" already exist`);
  }

  const result = await User.create({ ...req.body });
  res.status(201).json(result);
});

const fetchUsers = ctrlWrapper(async (req, res) => {
  // const { id: ownerFarm } = req.params;

  const listUsers = await User.find({});

  res.status(201).json(listUsers);
});

const fetchBussinesUsers = ctrlWrapper(async (req, res) => {
  const listBussinesUsers = await User.find({ typeUser: "business" });

  res.status(201).json(listBussinesUsers);
});

const fetchUserById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  res.status(201).json(user);
});

const deleteUser = ctrlWrapper(async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id);

  res.status(201).json(user);
});

const updateUser = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  // const { name } = req.body;

  const user = await User.findByIdAndUpdate(id, req.body);

  res.status(201).json(user);
});

module.exports = {
  addUser,
  fetchUsers,
  fetchUserById,
  fetchBussinesUsers,
  deleteUser,
  updateUser,
};
