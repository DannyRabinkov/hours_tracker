const _ = require("lodash");
const db = require("../models");

const Role = db.valuesRole;

const getRoles = async (req, res) => {
  let roles = await Role.findAll({
    attributes: ["Role", "Value"],
  });
  res.status(200).send(roles);
};

module.exports = {
  getRoles,
};
