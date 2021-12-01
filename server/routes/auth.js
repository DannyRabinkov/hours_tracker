const Joi = require("joi");
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  // validate the data with joi
  const { error } = validateSigngIn(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // check if the email exists
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password");
  //check if the password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password");
  //pass to the auth middleware
  res.json({ token: user.generateAuthToken() });
});

function validateSigngIn(data) {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).email().required(),
    password: Joi.string().min(6).max(255).required(),
  });
  return schema.validate(data);
}

module.exports = router;
