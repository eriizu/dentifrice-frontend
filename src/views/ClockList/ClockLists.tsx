import React from "react";
import { RouteComponentProps } from "react-router-dom";
import "./Clock.css";
interface Clock {
  name: string;
  start: Date;
  end: Date;
  count: "UP" | "DOWN";
  // author: string | any;
}

interface IState {
  clocks: Clock[];
}

export default class ClockList extends React.Component<
  RouteComponentProps & { setTitle: (title: string) => void },
  IState
> {
  async getClock() {
    let token = localStorage.getItem("access_token");
    if (!token) {
      this.props.history.push("/login");
    }
    let res = await fetch(`http://localhost:9000/clocks`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log(res);
    let clocks: Clock[] = await res.json();
    this.setState({ clocks });
    console.log(clocks);
  }

  componentDidMount() {
    this.props.setTitle("Clocks");
    this.getClock();
  }

  pouet() {
    console.log("The link was clicked.");
    return false;
  }

  getCard() {
    return (
      <div className="clockCardContainer">
        <div className="clockCard">
          <h2>Pouet, 4 jours</h2>
          <p>depuis le 7 septembre</p>
        </div>
        <button className="clockButton">
          {/* <button className="clockDetailsButton" onClick={this.pouet}> */}
          détails
          {/* </button> */}
        </button>
      </div>
    );
  }

  render() {
    if (this.state?.clocks)
      return (
        <React.Fragment>
          <ul className="clockList">
            {this.state.clocks.map((clk, index) => {
              return <li key={index}>{clk.name}</li>;
            })}
            {this.getCard()}
            {this.getCard()}
            {this.getCard()}
            {this.getCard()}
          </ul>
        </React.Fragment>
      );
    else
      return (
        <React.Fragment>
          <h1>Clocks</h1> <p>No clocks to show</p>
        </React.Fragment>
      );
  }
}
