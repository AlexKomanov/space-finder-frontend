import React from "react";
import { AuthService } from "../services/AuthService";

interface LoginProps {
  authService: AuthService;
}

interface LoginState {
  username: string;
  password: string;
  loginAttempted: boolean;
  loginSuccesfull: boolean;
}

export class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    username: "",
    password: "",
    loginAttempted: false,
    loginSuccesfull: false,
  };

  render() {
    return(
    <div>
        <h2>Please Login</h2>
        <form>
            <input value={this.state.username} /><br/>
            <input value={this.state.password} type='password' /> <br/>
            <input type='submit' value='Login'/>
        </form>
            </div>
    )
  }
}
