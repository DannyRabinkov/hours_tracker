const db = require("../models");
const { body, validationResult } = require("express-validator/check");

const User = db.users;

//create user
const addUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  let info = {
    Phone: req.body.Phone,
    Role: req.body.Role,
    Password: req.body.Password,
    Name: req.body.Name,
  };
  let existsUser = await User.findOne({ where: { Phone: req.body.Phone } });
  if (existsUser)
    return res
      .status(400)
      .send("User with this phone already exists, try again");

  const user = await User.create(info);

  res.status(200).send(user);
};

//get all users
const getAllEmployees = async (req, res) => {
  let users = await User.findAll({
    where: {
      Role: "employee",
    },
    attributes: ["id", "Role", "Phone", "Password", "Name"],
  });

  res.status(200).send(users);
};

//get all employers
const getAllEmployers = async (req, res) => {
  let users = await User.findAll({
    where: {
      Role: "employer",
    },
    attributes: ["Role", "Phone", "Password", "Name"],
  });

  res.status(200).send(users);
};

//get single user
const getOneUser = async (req, res) => {
  let id = req.params.id;
  let user = await User.findOne({
    where: { id: id },
    attributes: ["Role", "Phone", "Password", "Name"],
  });

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

const validate = (method) => {
  switch (method) {
    case "createUser": {
      return [
        body("Name", "Name doesn't exists").exists().isString(),
        body("Password", "Password doesn't exists").exists(),
        body("Phone").optional().isInt(),
        body("Role").optional().isIn(["employee", "employer"]),
      ];
    }
  }
};

module.exports = {
  addUser,
  getAllEmployees,
  getAllEmployers,
  getOneUser,
  updateUser,
  deleteUser,
  validate,
};
