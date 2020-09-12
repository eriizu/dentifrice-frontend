import React from "react";
import moment from "moment";
import "./ClockCard.css";
import "moment/locale/fr";
import "moment/locale/en-gb";
import { IClock } from "../../resources/Clocks";

interface IProps {
  clock: IClock;
  buttons?: boolean;
}

export default class ClockCard extends React.Component<IProps> {
  // constructor (props: IProps) {
  //   super(props)
  // }
  render() {
    moment.locale("en-gb");
    //     moment.locale("fr");
    console.log(moment.locale());

    let clock = this.props.clock;
    let relativeTime =
      clock.count === "UP"
        ? `started ${moment(clock.start).fromNow(false)}`
        : `${moment(clock.end).fromNow(false)}`;
    let startOrEnd =
      clock.count === "UP"
        ? `Since ${moment(clock.start).format("LL")}`
        : `Counting to ${moment(clock.end).format("LL")}`;

    let buttons = this.props.buttons ? (
      <button className="clockButton">
        {/* <button className="clockDetailsButton" onClick={this.pouet}> */}
        détails
        {/* </button> */}
      </button>
    ) : null;

    return (
      <React.Fragment>
        <div className="clockCardContainer">
          <div className="clockCard">
            <p>
              <b>{clock.name}</b>, {relativeTime}.
            </p>
            <p className="clockCardSubtext">{startOrEnd}</p>
          </div>
          {buttons}
        </div>
      </React.Fragment>
    );
  }
}
