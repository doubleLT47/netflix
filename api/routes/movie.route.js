
const router = require('express').Router();
const Movie = require('../models/Movie');
const verifyToken = require('../middlewares/verifyToken');


//CREATE MOVIE
router.post('/', verifyToken, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body)
        
        try {
            const movie = await newMovie.save();
            res.status(200).json(movie)
        }
        catch (err) {
            res.status(500).json(err)
        }
    }
    else {
        res.status(403).json("You are not allow to use this function!")
    }
})

//UPDATE MOVIE
router.put('/:id', verifyToken, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updateMovie = await Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true});
            res.status(200).json(updateMovie)
        }
        catch (err) {
            res.status(500).json(err)
        }
    }
    else {
        res.status(403).json("You are not allow to use this function!")
    }
})

//DELETE MOVIE
router.delete('/:id', verifyToken, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id);

            res.status(200).json("Movie has been deleted!")
        }
        catch (err) {
            res.status(500).json(err)
        }
    }
    else {
        res.status(403).json("You are not allow to use this function!")
    }
})

//GET RANDOM
router.get('/find/random', verifyToken, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
      if (type === "series") {
        movie = await Movie.aggregate([
          { $match: { isSeries: true } },
          { $sample: { size: 1 } },
        ]);
      } else {
        movie = await Movie.aggregate([
          { $match: { isSeries: false } },
          { $sample: { size: 1 } },
        ]);
      }
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET MOVIE
router.get('/:id', async (req, res) => { 
    console.log(req.params.id)  
    try {
        const movie = await Movie.findById(req.params.id);

        res.status(200).json(movie)
    }
    catch (err) {
        res.status(500).json(err)
    }
    
})

//GET ALL
router.get('/', async (req, res) => {   
    try {
        const movies = await Movie.find();

        res.status(200).json(movies.reverse());
    }
    catch (err) {
        res.status(500).json(err)
    }
    
})

module.exports = router;
