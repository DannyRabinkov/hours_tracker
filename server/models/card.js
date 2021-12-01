const mongoose = require("mongoose");
const Joi = require("joi");
const _ = require("lodash");

const cardSchema = new mongoose.Schema({
  bizName: {
    type: String,
    minlength: 2,
    maxlength: 255,
    required: true,
  },
  bizDescription: {
    type: String,
    minlength: 2,
    maxlength: 1024,
    required: true,
  },
  bizAddress: {
    type: String,
    minlength: 2,
    maxlength: 400,
    required: true,
  },
  bizPhone: {
    type: String,
    minlength: 9,
    maxlength: 10,
    required: true,
  },
  bizImage: {
    type: String,
    minlength: 11,
    maxlength: 1024,
    required: true,
  },
  bizNumber: {
    type: String,
    minlength: 4,
    maxlength: 8,
    required: true,
    unique: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Card = mongoose.model("Card", cardSchema);

function validateCard(card) {
  const schema = Joi.object({
    bizName: Joi.string().min(2).max(255).required(),
    bizDescription: Joi.string().min(2).max(1024).required(),
    bizAddress: Joi.string().min(2).max(400).required(),
    bizPhone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/),
    bizImage: Joi.string().min(2).max(1024),
  });

  return schema.validate(card);
}

async function generateBizNumber() {
  while (true) {
    let randomNumber = _.random(1000, 99999999);
    randomNumber = String(randomNumber);
    let card = await Card.findOne({ bizNumber: randomNumber });
    if (!card) return randomNumber;
  }
}

module.exports = {
  Card,
  validateCard,
  generateBizNumber,
};
