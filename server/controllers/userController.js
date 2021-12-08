const db = require("../models");
const { body, validationResult } = require("express-validator/check");
const bcrypt = require("bcrypt");

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

  let salt = await bcrypt.genSalt(10);
  info.Password = await bcrypt.hash(info.Password, salt);
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
      Role: "Employer",
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

//get employer or employee
const getRole = async (req, res) => {
  let Phone = req.params.Phone;
  let user = await User.findOne({
    where: { Phone: Phone },
    attributes: ["Role", "Phone", "Password", "Name"],
  });
  if (user.Role === "Employer") {
    res.status(200).send(user.Role);
    res.send(true);
  }
  res.status(200).send(user.Role);
  res.send(false);
};

//update user
const updateUser = async (req, res) => {
  let id = req.params.id;

  const user = await User.update(req.body, { where: { id: id } });
  res.status(200).send(user);
};

//delete user by phone
const deleteUser = async (req, res) => {
  let Phone = req.params.Phone;
  await User.destroy({ where: { Phone: Phone } });
  res.status(200).send("User is deleted!");
};

const validate = (method) => {
  switch (method) {
    case "createUser": {
      return [
        body("Name", "Name doesn't exists").exists().isString(),
        body("Password", "Password doesn't exists").exists(),
        body("Phone").optional().isInt(),
        body("Role").optional().isString(),
      ];
    }
  }
};

//login user
const login = async (req, res) => {
  // check if the phone exists
  let user = await User.findOne({ where: { Phone: req.body.Phone } });
  if (!user) return res.status(400).send("Invalid Phone");
  //check if the password is correct
  const validPassword = await bcrypt.compare(req.body.Password, user.Password);
  if (!validPassword) {
    return res.status(400).send("Invalid password");
  }

  res.status(200).send(user);
};

module.exports = {
  addUser,
  getAllEmployees,
  getAllEmployers,
  getRole,
  getOneUser,
  updateUser,
  deleteUser,
  validate,
  login,
};
