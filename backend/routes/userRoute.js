const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/signup", userController.createUser);
router.get("/allusers", userController.users);
router.get("/allusers/:id", userController.findByIduser);
router.put("/allusers/:id", userController.updateUser);
router.delete("/allusers/:id", userController.deleteUser);

module.exports = router;