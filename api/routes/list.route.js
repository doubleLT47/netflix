const router = require("express").Router();
const listController = require("../controllers/list.controller");
const { verifyToken } = require("../middlewares/verifyToken");

// CREATE LIST
router.post("/", verifyToken, listController.createList);

// DELETE LIST
router.delete("/:id", verifyToken, listController.deleteList);

// GET

router.get("/", verifyToken, listController.getAllLists);

module.exports = router;
