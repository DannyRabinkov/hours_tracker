const sessionController = require("../controllers/sessionController.js");
const router = require("express").Router();

router.post("/addSession", sessionController.addSession);
router.get("/:id", sessionController.empSession);

module.exports = router;
