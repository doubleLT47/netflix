
import "./app.css"

import TopBar from './components/topBar/TopBar'
import SideBar from './components/sideBar/SideBar'

import Home from "./pages/home/Home"
import UserList from "./pages/userList/UserList"
import User from "./pages/user/User"
import AddUser from "./pages/addUser/AddUser"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import ProductList from "./pages/productList/ProductList"
import Product from "./pages/product/Product"
import AddProduct from "./pages/addProduct/AddProduct";
import Login from "./pages/login/Login"
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router className="App">
      <Switch>
        <Route path="/login" exact>
          { user ? <Redirect to="/" /> : <Login /> }
        </Route>
        {user && 
          <>
            <TopBar />
            <div className="container" >
              <SideBar />
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/users" exact>
                <UserList />
              </Route>
              <Route path="/user/:userId" exact>
                <User />
              </Route>
              <Route path="/new-user" exact>
                <AddUser />
              </Route>
              <Route path="/movies" exact>
                <ProductList />
              </Route>
              <Route path="/movies/:movieId" exact>
                <Product />
              </Route>
              <Route path="/new-product" exact>
                <AddProduct />
              </Route>
            </div>
          </>
        }
      </Switch>
    </Router>
  );
}

export default App;
