import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from './Components/Login/Login';
import Products from './Components/Products/Products';
import Header from './Components/Header/Header';
import Admin from './Components/Admin/Admin';
import Order from './Components/Order/Order';
import Checkout from './Components/Checkout/Checkout';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import NoMatch from './Components/NoMatch/NoMatch';

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/product">
            <Products></Products>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/orders">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/products/:id">
            <Checkout></Checkout>
          </PrivateRoute>

          <PrivateRoute path="/manageProduct">
            <ManageProduct></ManageProduct>
          </PrivateRoute>

          <PrivateRoute path="/productDetail">
            <productDetail></productDetail>
          </PrivateRoute>
          <Route exact path="/">
            <Products></Products>
          </Route>

          <Route path="*">
          <NoMatch></NoMatch>
        </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
