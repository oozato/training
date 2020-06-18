import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./style.css";
import Login from "./Login";
import Header from "./Head";
import Footer from "./Foot";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Login />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
