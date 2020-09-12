import React from "react";
import { RouteComponentProps } from "react-router-dom";
import querystring from "query-string";
import { dentifrice } from "../../dataSources/Dentfrice";
import { notify } from "react-notify-toast";

interface IState {
  access_token?: string;
}

interface IProps {}

export class Login extends React.Component<
  RouteComponentProps & { setTitle: (title: string) => void },
  IState
> {
  constructor(
    props: RouteComponentProps & { setTitle: (title: string) => void }
  ) {
    super(props);
    console.log(this.props.location.search);
    this.query = querystring.parse(this.props.location.search);
    console.log(this.query);
    this.state = {
      access_token: localStorage.getItem("access_token") as string,
    };
  }

  query: querystring.ParsedQuery;
  timeout?: NodeJS.Timeout;

  async login() {
    if (typeof this.query?.code == "string" && !dentifrice.token.access) {
      try {
        console.log("code");
        await dentifrice.exchangeDiscordCode(this.query.code, "CODE");
        if (dentifrice.token?.access) {
          this.setState({ access_token: dentifrice.token.access });
          notify.show("You are logged in!", "success");
        }

        // let res = await fetch(
        //   `http://localhost:9000/discord/access_token?code=${this.query.code}`
        // );

        // let body = await res.json();
        // if (body?.access_token) {
        //   this.setState({ access_token: body.access_token });
        //   localStorage.setItem("access_token", body.access_token);
        //   localStorage.setItem("refresh_token", body.refresh_token);
        //   this.props.history.goBack();
        // }
      } catch (err) {
        console.error(err);
        this.setState({ access_token: "error" });
      }
    }
  }

  componentDidMount() {
    this.props.setTitle("Login");

    if (dentifrice.token.access && !this.query.code) {
      notify.show("You are already logged-in.", "warning", 2000);
      this.timeout = setTimeout(() => {
        this.props.history.goBack();
      }, 3000);
    } else {
      this.login();
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
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
