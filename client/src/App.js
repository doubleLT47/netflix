import "./app.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            {user ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route path="/register" exact>
            {!user ? <Register /> : <Redirect to="/" />}
          </Route>
          <Route path="/login" exact>
            {!user ? <Login /> : <Redirect to="/" />}
          </Route>
          {user ? (
            <>
              <Route path="/movies">
                <Home type="movie" />
              </Route>
              <Route path="/series">
                <Home type="series" />
              </Route>
              <Route path="/watch">
                <Watch />
              </Route>
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
