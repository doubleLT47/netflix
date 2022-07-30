const Movie = require("../models/Movie");

exports.createMovie = async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);

    try {
      const movie = await newMovie.save();
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Bạn không đủ quyền truy cập!");
  }
};

exports.updateMovieById = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updateMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Bạn không đủ quyền truy cập!");
  }
};

exports.deleteMovieById = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);

      res.status(200).json("Phim đã đưuọc xóa!");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Bạn không đủ quyền truy cập!");
  }
};

exports.getRandomMovie = async (req, res) => {
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
};

exports.getMovieById = async (req, res) => {
  console.log(req.params.id);
  try {
    const movie = await Movie.findById(req.params.id);

    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();

    res.status(200).json(movies.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
};
