const sessionController = require("../controllers/sessionController.js");
const router = require("express").Router();

router.post("/addSession", sessionController.addSession);

module.exports = router;
