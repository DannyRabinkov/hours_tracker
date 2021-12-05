const userController = require("../controllers/userController.js");
const router = require("express").Router();

router.post(
  "/addUser",
  userController.validate("createUser"),
  userController.addUser
);
router.get("/allEmployees", userController.getAllEmployees);
router.get("/employers", userController.getAllEmployers);
router.get("/:id", userController.getOneUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
