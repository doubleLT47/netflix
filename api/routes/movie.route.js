const router = require("express").Router();
const movieController = require("../controllers/movie.controller");
const { verifyToken } = require("../middlewares/verifyToken");

//CREATE MOVIE
router.post("/", verifyToken, movieController.createMovie);

//UPDATE MOVIE
router.put("/:id", verifyToken, movieController.updateMovieById);

//DELETE MOVIE
router.delete("/:id", verifyToken, movieController.deleteMovieById);

//GET RANDOM
router.get("/find/random", verifyToken, movieController.getRandomMovie);

//GET MOVIE
router.get("/:id", movieController.getMovieById);

//GET ALL
router.get("/", movieController.getAllMovies);

module.exports = router;
