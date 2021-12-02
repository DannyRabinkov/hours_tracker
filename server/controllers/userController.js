const db = require("../models");
const { Sequelize } = require("sequelize");

const User = db.users;
const Role = db.values_role;

// holds array of roles. use laster when returning user on role field
//RoleArr[res.user.role].value
const RoleArr = ["employee", "employer"]; //roleCall();

async function roleCall() {
  /*   return await Role.findAll({});
      TODO get all rows from Roles table -> return it as array
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
};

//get all users
const getAllEmployees = async (req, res) => {
  // get employee role id from arr
  let employeeRoleId = RoleArr.indexOf("employee");
  let users = await User.findAll({
    where: {
      Role: {
        [Sequelize.Op.like]: `%${employeeRoleId}%`,
      },
    },
  });
  res.status(200).send(users);
};

//get single user
const getOneUser = async (req, res) => {
  let id = req.params.id;
  let user = await User.findOne({ where: { id: id } });
  user.Role = RoleArr[user.Role];
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
  getAllEmployees,
  getOneUser,
  updateUser,
  deleteUser,
};
