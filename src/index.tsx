import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./style.scss";
import Login from "./Login";
import Header from "./Head";
import Footer from "./Foot";
import Register from "./Register";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
