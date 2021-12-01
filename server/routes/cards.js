const { Card, validateCard, generateBizNumber } = require("../models/card");
const auth = require("../middleware/auth");
const _ = require("lodash");
const express = require("express");
const router = express.Router();

// router.get("/:id", auth, async (req, res) => {
//   let card = await Card.findOne({
//     bizNumber: req.params.id,
//     user_id: req.user._id,
//   });
//   if (!card) return res.status(404).send("The business card wasn't found");
//   res.send(card);
// });
router.get("/all", auth, async (req, res) => {
  let cards = await Card.find({
    user_id: req.user._id, // this condition is if we want that only the owner of the card will get it
  });
  if (!cards) return res.status(404).send("The business cards wasn't found");
  res.send(cards);
});

router.get("/:id", auth, async (req, res) => {
  let card = await Card.findOne({
    _id: req.params.id,
    user_id: req.user._id, // this condition is if we want that only the owner of the card will get it
  });
  if (!card) return res.status(404).send("The business card wasn't found");
  res.send(card);
});

router.put("/:id", auth, async (req, res) => {
  //1 - req.body validation
  const { error } = validateCard(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // 2 - find and update the card, the user_id must be the same as the req.user._id
  // we receive the card before update
  let card = await Card.findOneAndUpdate(
    {
      _id: req.params.id,
      user_id: req.user._id,
    },
    req.body
  );
  if (!card)
    return res.status(404).send("The card with the given ID was not found");
  // 3 - get the updated document. We receive the card after update.
  card = await Card.findOne({
    _id: req.params.id,
    user_id: req.user._id,
  });
  // 4 - send back the updated document
  res.send(card);
});

router.delete("/:id", auth, async (req, res) => {
  // 1 - find and delete the card with the object id and my user_id
  const card = await Card.findOneAndDelete({
    _id: req.params.id,
    user_id: req.user._id,
  });
  if (!card)
    return res.status(404).send("The card with the given id was not found");
  // 2 - send the user the card before the deletion
  res.send(card);
});

router.post("/", auth, async (req, res) => {
  try {
    // 1 - validity check
    const { error } = validateCard(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // 2 - is biz = true?
    if (!req.user)
      return res.status(400).send("You are not allowed to add a new business");
    //3 - create a new object
    const card = new Card({
      bizName: req.body.bizName,
      bizDescription: req.body.bizDescription,
      bizAddress: req.body.bizAddress,
      bizPhone: req.body.bizPhone,
      bizImage: req.body.bizImage
        ? req.body.bizImage
        : "http://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      bizNumber: await generateBizNumber(),
      user_id: req.user._id,
    });
    //4 - save the object to the DB and store the returned object
    let post = await card.save();
    //5 - send the client the returned object
    res.send(post);
  } catch (error) {
    res.send(error.message, 500);
  }
});

module.exports = router;
