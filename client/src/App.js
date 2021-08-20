import "./app.scss"
import Home from "./pages/home/Home"
import Watch from "./pages/watch/Watch"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login";
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";

function App() {
  return (
    <Router >
      <div className="App">
        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movies" exact>
            <Home type="movie"/>
          </Route>
          <Route path="/series" exact>
            <Home type="series"/>
          </Route>
          <Route path="/watch" exact>
            <Watch />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
