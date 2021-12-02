const db = require("../models");

const User = db.users;
const Session = db.sessions;
const Role = db.values_role;

const RoleArr = roleCall();

async function roleCall() {
  /*   return await Role.findAll({});
   */
}

//create user
const addUser = async (req, res) => {
  let info = {
    Phone: req.body.Phone,
    Role: req.body.Role,
    Password: req.body.Password,
    Name: req.body.Name,
  };

  const user = await User.create(info);
  res.status(200).send(user);
  console.log(user);
};

//get all users
const getAllUsers = async (req, res) => {
  let users = await User.findAll({});
  res.send(users);
  res.status(200).send(users);
};

//get single user
const getOneUser = async (req, res) => {
  let id = req.params.id;
  let user = await User.findOne({ where: { id: id } });
  res.status(200).send(user);
};

//update user
const updateUser = async (req, res) => {
  let id = req.params.id;

  const user = await User.update(req.body, { where: { id: id } });
  res.status(200).send(user);
};

//delete user by id
const deleteUser = async (req, res) => {
  let id = req.params.id;
  await User.destroy({ where: { id: id } });
  res.status(200).send("User is deleted!");
};

module.exports = {
  addUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
};
