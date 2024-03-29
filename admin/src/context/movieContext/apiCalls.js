import axios from "axios";
import {
  getMoviesStart,
  getMoviesFailure,
  getMoviesSuccess,
  deleteMovieStart,
  deleteMovieSuccess,
  deleteMovieFailure,
  createMovieStart,
  createMovieSuccess,
  createMovieFailure,
  updateMovieStart,
  updateMovieSuccess,
  updateMovieFailure,
} from "./MovieActions";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart);
  try {
    const res = await axios.get(
      `https://luannt201mernnetflixclone.herokuapp.com/api/movies/`,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure);
  }
};

export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart);
  try {
    await axios.delete(
      `https://luannt201mernnetflixclone.herokuapp.com/api/movies/` + id,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure);
  }
};

export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart);
  try {
    const res = await axios.post(
      `https://luannt201mernnetflixclone.herokuapp.com/api/movies/`,
      movie,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure);
  }
};

export const updateMovie = async (id, movie, dispatch) => {
  dispatch(updateMovieStart);
  try {
    const res = await axios.put(
      `https://luannt201mernnetflixclone.herokuapp.com/api/movies/${id}`,
      movie,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(updateMovieSuccess(res.data));
  } catch (err) {
    dispatch(updateMovieFailure);
  }
};
