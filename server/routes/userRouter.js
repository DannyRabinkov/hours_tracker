const userController = require("../controllers/userController.js");
const router = require("express").Router();

router.post("/addUser", userController.addUser);
router.get("/allEmployees", userController.getAllEmployees);
router.get("/:id", userController.getOneUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
