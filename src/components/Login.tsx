import React, { SyntheticEvent } from "react";
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

interface CustomEvent {
  target: HTMLInputElement
}

export class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    username: "",
    password: "",
    loginAttempted: false,
    loginSuccesfull: false,
  };

  private setUserName(event: CustomEvent){
    this.setState({username: event.target.value});
  }

  private setPassword(event: CustomEvent){
    this.setState({password: event.target.value});
  }

  private async handleSubmit(event: SyntheticEvent){
    event.preventDefault();
    this.setState({loginAttempted: true})
    const result = await this.props.authService.login(
      this.state.username,
      this.state.password
    )
    if(result) {
      this.setState({loginSuccesfull: true})
    }
    else {
      this.setState({loginSuccesfull: false})
      console.log('Wrong login');
      
    }
  }

  render() {
    let loginMessage: any;
    if(this.state.loginAttempted){
      if(this.state.loginSuccesfull) {
        loginMessage = <label>Login Successfull</label>
      }
      else {
        loginMessage = <label>Login Failed</label>
      }
    }
    return(
    <div>
        <h2>Please Login</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
            <input value={this.state.username} onChange={e => this.setUserName(e)} /><br/>
            <input value={this.state.password} type='password' onChange={e => this.setPassword(e)} /> <br/>
            <input type='submit' value='Login' />
        </form>
        {loginMessage}
            </div>
    )
  }
}
