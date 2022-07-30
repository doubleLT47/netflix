const { check } = require("express-validator");

exports.updatePasswordValidator = [
  check("oldPassword").notEmpty().withMessage("Mật khẩu không được để trống"),
  check("newPassword")
    .notEmpty()
    .withMessage("Mật khẩu mới không được để trống")
    .isLength({ min: 6 })
    .withMessage("Mật khẩu quá ngắn"),
  check("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.newPassword) {
      throw new Error("Mật khẩu không khớp");
    }
    return true;
  }),
];

exports.loginValidator = [
  check("email").notEmpty().withMessage("Email không được để trống"),
  check("password")
    .notEmpty()
    .withMessage("Mật khẩu không được để trống")
    .isLength({ min: 6 })
    .withMessage("Mật khẩu quá ngắn"),
];

exports.userValidator = [
  check("email").notEmpty().withMessage("Email không được để trống"),
  check("password").notEmpty().withMessage("Mật khẩu không được để trống"),
  check("fullName").notEmpty().withMessage("Tên hiển thị không được để trống"),
  check("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Mật khẩu không khớp");
    }
    return true;
  }),
];

exports.editUserValidator = [
  check("fullName").notEmpty().withMessage("Tên hiển thị không được để trống"),
];
