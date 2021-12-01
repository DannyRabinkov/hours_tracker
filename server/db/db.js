const mongoose = require("mongoose");

const db = mongoose
  .connect("mongodb://127.0.0.1:27017/re-db-proj", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB - re-db-proj....."))
  .catch((error) => console.log("Could not connect to MongoDB....", error));

module.exports = db;
