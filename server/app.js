const express = require("express");
const cors = require("cors");
const router = require("./routes/userRouter.js");

const app = express();

let corOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", router);

//Test server running
app.get("/", (req, res) => {
  res.send(new Date().toLocaleTimeString());
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Listening to port ${port}, click http://localhost:${port}`)
);
