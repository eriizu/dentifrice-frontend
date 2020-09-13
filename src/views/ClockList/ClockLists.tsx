import React from "react";
import { RouteComponentProps } from "react-router-dom";
import "./Clock.css";
import ClockCard from "../ClockCard";
import { dentifrice } from "../../dataSources/Dentfrice";
import { IClock } from "../../resources/Clocks";

interface IState {
  clocks: IClock[];
}

export default class ClockList extends React.Component<
  RouteComponentProps & { setTitle: (title: string) => void },
  IState
> {
  async getClock() {
    let clocks = await dentifrice.getAllClocks();
    if (clocks) this.setState({ clocks });
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
    if (this.state?.clocks && this.state.clocks.length)
      return (
        <React.Fragment>
          <div className="clockList">
            {this.state.clocks.map((clk, key) => {
              return (
                <ClockCard key={key} clock={clk} buttons={true}></ClockCard>
              );
            })}

            {this.getCard()}
          </div>
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
