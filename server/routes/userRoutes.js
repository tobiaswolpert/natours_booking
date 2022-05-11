const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const authenticationController = require("../controllers/authenticationController");

router.route("/signup").post(authenticationController.signup);
router.route("/login").post(authenticationController.login);

router.post("/forgotPassword", authenticationController.forgotPassword);
router.patch("/resetPassword/:token", authenticationController.resetPassword);
router.patch(
  "/updateMyPassword",
  authenticationController.protect,
  authenticationController.updatePassword
);

router.patch(
  "/updateMe",
  authenticationController.protect,
  userController.updateMe
);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
