const router = require("express").Router();
const {
  deleteAccountById,
  updateUserById,
  getAccountById,
  getAllAccounts,
  getUserStats,
} = require("../controllers/user.controller");
const { verifyToken } = require("../middlewares/verifyToken");

//UPDATE
router.put("/:id", verifyToken, updateUserById);

//DELETE
router.delete("/:id", verifyToken, deleteAccountById);

//GET
router.get("/find/:id", getAccountById);

//GET ALL
router.get("/", verifyToken, getAllAccounts);

//GET USER STATS
router.get("/stats", verifyToken, getUserStats);

module.exports = router;
