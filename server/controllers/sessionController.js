const db = require("../models");

const Session = db.sessions;
const User = db.users;

//create session
const addSession = async (req, res) => {
  let info = {
    User_ID: req.body.User_ID,
    Shift_Duration: req.body.Shift_Duration,
  };

  const session = await Session.create(info);
  res.status(200).send(session);
};

//get employee sessions
const empSession = async (req, res) => {
  let id = req.params.id;
  let sessions = await Session.findAll({
    where: { User_ID: id },
  });
  res.status(200).send(sessions);
};

module.exports = {
  addSession,
  empSession,
};
