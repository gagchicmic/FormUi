import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "normalize.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Home";

import App from "./App";
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} exact />

      <Route path="/login" component={App} />
      <Redirect to="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
