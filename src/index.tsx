import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./dentifrice.css";
import NavBar from "./views/NewNavBar";
import Login from "./views/Login";
import ClockList from "./views/ClockList";
import ClockEditor from "./views/ClockEditor";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Notifications from "react-notify-toast";

class Root extends React.Component<{}, { title: string }> {
  constructor(props: {}) {
    super(props);
    this.state = { title: "Home" };
  }

  setTitle(title: string) {
    this.setState({ title: title });
    document.title = title + " - Dentifrice";
  }

  render() {
    return (
      <React.StrictMode>
        <Notifications></Notifications>
        <Router>
          <div className="centerContainer">
            <div className="main">
              <h1 className="logo">Dentifice</h1>
              <h1 className="title">{this.state.title}</h1>
              <div className="nav">
                <NavBar />
              </div>
              <div className="content">
                <Suspense fallback={<div>Loading...</div>}>
                  <Switch>
                    <Route path="/" exact render={() => <p>Bonjour</p>}></Route>
                    <Route
                      path="/clocks/editor"
                      render={(props) => (
                        <ClockEditor
                          {...props}
                          setTitle={(title) => this.setTitle(title)}
                        />
                      )}
                    />
                    <Route
                      path="/clocks"
                      render={(props) => (
                        <ClockList
                          {...props}
                          setTitle={(title) => this.setTitle(title)}
                        />
                      )}
                    />
                    <Route
                      path="/login"
                      render={(props) => (
                        <Login
                          {...props}
                          setTitle={(title) => this.setTitle(title)}
                        />
                      )}
                    />
                    <Route path="/about" render={() => <h1>About</h1>} />
                  </Switch>
                </Suspense>
              </div>
            </div>

            {/* <Old /> */}
          </div>
        </Router>
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<Root></Root>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
