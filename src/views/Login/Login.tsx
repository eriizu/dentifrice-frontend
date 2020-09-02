import React from "react";
import { RouteComponentProps } from "react-router-dom";
import querystring from "query-string";
interface IState {
  access_token?: string;
}

export class Login extends React.Component<RouteComponentProps, IState> {
  constructor(props: RouteComponentProps) {
    super(props);
    console.log(this.props.location.search);
    this.query = querystring.parse(this.props.location.search);
    console.log(this.query);
    this.state = {};
  }

  query: querystring.ParsedQuery;

  async login() {
    if (this.query.code) {
      try {
        let res = await fetch(
          `http://localhost:9000/discord/access_token?code=${this.query.code}`
        );

        let body = await res.json();
        if (body?.access_token) {
          this.setState({ access_token: body.access_token });
          localStorage.setItem("access_token", body.access_token);
          localStorage.setItem("refresh_token", body.refresh_token);
          this.props.history.goBack();
        }
      } catch (err) {
        console.error(err);
        setTimeout(() => {
          this.setState({ access_token: "not found" });
        }, 3000);
      }
    }
  }

  componentDidMount() {
    this.login();
  }

  render() {
    // this.query.read
    return (
      <React.Fragment>
        <div>
          <a href="https://discord.com/api/oauth2/authorize?client_id=676485112564678657&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&response_type=code&scope=identify%20guilds">
            Log in with discord
          </a>
        </div>
        <div>access_token: {this.state.access_token}</div>
      </React.Fragment>
    );
  }
}

export default Login;
