import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

import App from "./App";
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={App} />
      <Route path="/signup" component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
