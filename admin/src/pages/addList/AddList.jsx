import "./addList.css";
import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { createList } from "../../context/listContext/apiCalls";

const AddList = () => {
  const [list, setList] = useState(null);
  const history = useHistory();

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;

    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createList(list, dispatch);
    history.push("/lists");
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  return (
    <div className="add-product">
      <h1 className="add-product-title">New List</h1>
      <form className="add-product-form">
        <div className="form-left">
          <div className="add-product-item">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter list title..."
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="add-product-item">
            <label>Genre</label>
            <input
              type="text"
              placeholder="List genre..."
              name="genre"
              onChange={handleChange}
            />
          </div>
          <div className="add-product-item">
            <label>Type</label>
            <select name="type" onChange={handleChange}>
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>
        <div className="form-right">
          <div className="add-product-item">
            <label>Content</label>
            <select
              multiple
              name="content"
              onChange={handleSelect}
              style={{ height: "280px" }}
            >
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
          <button className="add-product-button" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddList;
