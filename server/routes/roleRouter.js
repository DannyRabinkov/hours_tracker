const roleController = require("../controllers/roleController.js");
const router = require("express").Router();

router.get("/getRoles", roleController.getRoles);

module.exports = router;
