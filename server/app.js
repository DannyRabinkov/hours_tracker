const cors = require("cors");
const db = require("./db/db");
const cards = require("./routes/cards");
const users = require("./routes/users");
const auth = require("./routes/auth");
const express = require("express");
const app = express();
const http = require("http").Server(app);

app.use(cors());
app.use(express.json());
app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/cards", cards);

app.get("/", (req, res) => {
  res.send(new Date().toLocaleTimeString());
});

const port = process.env.PORT || 3000;
http.listen(port, () =>
  console.log(`Listening to port ${port}, click http://localhost:${port}`)
);
