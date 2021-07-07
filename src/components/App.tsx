import React from "react";
import { User } from "../model/Model";

interface AppState {
  user: User | undefined;
}

export class App extends React.Component<{}, AppState> {
  render() {
    return <div>App class works as well!</div>;
  }
}


