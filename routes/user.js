const userController = require("../controllers/userController");
const verifyUser = require("../middleware/auth");
const router = require("express").Router();

//GET
router.get("/", verifyUser.verifyToken, userController.getAllUsers);

//DELETE
router.delete("/:id", verifyUser.verifyTokenAdmin, userController.deleteUser);

module.exports = router;
