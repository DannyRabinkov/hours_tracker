const auth = require("../middleware/auth");
const { User, validateUser, validateCards } = require("../models/user");
const { Card } = require("../models/card");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user)
    return res
      .status(400)
      .send("User with this email already exists, try again");
  user = new User(req.body);
  let salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  res.send(_.pick(user, ["_id", "name", "email"]));
});

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

router.patch("/cards", auth, async (req, res) => {
  // 1 - validity check
  const { error } = validateCards(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // 2- get an array with all the cards by their bizNumbers
  let cards = await getCards(req.body.cards);
  // 3 - check that both arrays length are identical
  if (cards.length != req.body.cards.length)
    return res.status(400).send("Cards numbers don't match");
  // 4 - update the cards field in the user object
  let user = await User.findById(req.user._id);
  user.cards = req.body.cards;
  // 5 - save the new user object
  user.save();
  // 6 - send the result to the client
  res.send(user);
});

router.get("/cards", auth, async (req, res) => {
  // 1- check that we have a query string with numbers
  if (!req.query.numbers)
    return res.status(400).send("Cards numbers are missing");
  //2 - create a cards array with the biz numbers
  let cardsNumbers = req.query.numbers.split(",");
  //3 - get an array with the cards documents as objects
  const cards = await getCards(cardsNumbers);
  //4 - send the cards array to the client
  res.send(cards);
});

const getCards = async (cardsArray) => {
  let cards = await Card.find({ bizNumber: { $in: cardsArray } });
  return cards;
};

module.exports = router;
