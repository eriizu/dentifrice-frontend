import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavBar from "./views/NavBar";
import Login from "./views/Login";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <div className="NotNavBar">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" render={() => <h1>Bonjour</h1>} />
            <Route path="/about" render={() => <h1>About</h1>} />
            <Route path="/login" component={Login} />
          </Switch>
        </Suspense>
      </Router>
    </div>

    {/* <Old /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
