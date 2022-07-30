const router = require("express").Router();
var authController = require("../controllers/auth.controller");
const {
  userValidator,
  loginValidator,
} = require("../middlewares/auth.middleware");

//Register new user
router.post("/register", authController.postRegister);

//login
router.post("/login", authController.postLogin);

//refresh Token
router.post("/refreshToken", authController.refreshToken);

module.exports = router;
