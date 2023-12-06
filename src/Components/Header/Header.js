import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "../Cart/Cart";
import SeprateCartItem from "../Cart/SeprateCartItem/SeprateCartItem";
import Contact from "../Contact/Contact";
import Dashboard from "../Dashboard/Dashboard";

import Home from "../Home/Home";
import Login, { PrivateRoute } from "../Login/Login";
import Logout from "../Login/Logout";
import Register from "../Register/Register";
import SeprateUser from "../SeprateUser/SeprateUser";
import User from "../User/User";

import "./Header.css";

const Header = () => {
  function getLoginData() {
    const getData = localStorage.getItem("loggedIn");
    if (!getData) {
      return false;
    }
    return true;
  }
  useEffect(() => {
    getLoginData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {getLoginData() ? <Dashboard /> : <Home />}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute exact component={User} path="/user" />
          <PrivateRoute exact component={SeprateUser} path="/user/:id" />
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/logout" component={Logout}></Route>
          <PrivateRoute exact component={Dashboard} path="/dashboard" />
          <PrivateRoute exact component={Cart} path="/addToCart" />
          <PrivateRoute
            exact
            component={SeprateCartItem}
            path="/addToCart/:id"
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Header;
