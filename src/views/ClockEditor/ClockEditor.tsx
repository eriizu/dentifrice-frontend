import React from "react";
import moment from "moment";
import "./ClockEditor.css";
import { RouteComponentProps } from "react-router-dom";
import ClockCard from "../ClockCard";

import "moment/locale/fr";
import "moment/locale/en-gb";
import { IClock } from "../../resources/Clocks";

interface IProps {
  clock?: IClock;
  setTitle: (title: string) => void;
}

interface IMissingFields {
  date?: boolean;
  name?: boolean;
  direction?: boolean;
}

interface IState {
  clock: IClock;
  form: IForm;
}

interface IForm {
  name?: string;
  hasStart?: boolean;
  hasEnd?: boolean;
  startdate?: string;
  starttime?: string;
  enddate?: string;
  endtime?: string;
  count?: "UP" | "DOWN";
}

export default class ClockEditor extends React.Component<
  IProps & RouteComponentProps,
  IState
> {
  constructor(props: IProps & RouteComponentProps) {
    super(props);
    this.state = {
      clock: props.clock || {
        name: "New Clock",
        count: "UP",
        start: new Date(),
      },
      form: {},
    };
  }

  // onChange(
  // event: React.BaseSyntheticEvent<HTMLFormElement, EventTarget, IForm>
  // )
  // onChange(event: React.ChangeEvent<IForm>) {
  //   }

  // if (
  //   end === undefined &&
  //   event.target.count === "DOWN" &&
  //   !start === undefined &&
  //   event.target.count === "UP"
  // ) {
  // }
  // }

  parseDateTime(date: string, time: string) {
    if (date) {
      if (!time || time === "") {
        time = "00:00";
      }
      return new Date(`${date} ${time}`);
    } else {
      return undefined;
    }
  }

  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  }

  onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <form className="clockEditor" onSubmit={this.onSubmit}>
          <label className="nameSection">
            <p>How do you wanna call your new clock?</p>
            <input
              onChange={(e) => this.onChange(e)}
              value={this.state.form.name}
              type="text"
              name="name"
            />
          </label>

          <div className="start">
            <label>
              <p>
                Has a defined start&nbsp;
                <input
                  onChange={(e) => this.onChange(e)}
                  checked={this.state.form.hasStart}
                  type="checkbox"
                  name="hasStart"
                ></input>
              </p>
            </label>

            <br />

            <label>
              <p>
                date:{" "}
                <input
                  onChange={(e) => this.onChange(e)}
                  value={this.state.form.startdate}
                  type="date"
                  name="startdate"
                />
              </p>
            </label>

            <label>
              <p>
                time:{" "}
                <input
                  onChange={(e) => this.onChange(e)}
                  value={this.state.form.starttime}
                  type="time"
                  name="starttime"
                />
              </p>
            </label>
          </div>

          <div className="end">
            <label>
              <p>
                Has a defined ending&nbsp;
                <input
                  onChange={(e) => this.onChange(e)}
                  checked={this.state.form.hasEnd}
                  type="checkbox"
                  name="hasEnd"
                ></input>
              </p>
            </label>

            <br />

            <label>
              <p>
                date:{" "}
                <input
                  onChange={(e) => this.onChange(e)}
                  value={this.state.form.enddate}
                  type="date"
                  name="enddate"
                />
              </p>
            </label>

            <label>
              <p>
                time:{" "}
                <input
                  onChange={(e) => this.onChange(e)}
                  value={this.state.form.endtime}
                  type="time"
                  name="endtime"
                />
              </p>
            </label>
          </div>

          <div className="updownselection">
            <label>
              <input
                checked={this.state.form.count === "UP"}
                onChange={(e) => this.onChange(e)}
                type="radio"
                // id="up"
                name="count"
                value="UP"
              />{" "}
              &nbsp;
              <b>Count up</b> from start date.
            </label>

            <br />

            <label>
              <input
                checked={this.state.form.count === "DOWN"}
                onChange={(e) => this.onChange(e)}
                type="radio"
                // id="down"
                name="count"
                value="DOWN"
              />{" "}
              &nbsp;
              <b>Count down</b> to end date.
            </label>
          </div>

          <div className="preview">
            <ClockCard clock={this.state.clock} />
          </div>

          <div className="validate">
            {/* {this.state.missing?.date && <p>Date is missing</p>}
            {this.state.missing?.name && <p>name is missing</p>}
            {this.state.missing?.direction && <p>direction is missing</p>} */}
            <button>Save!</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
