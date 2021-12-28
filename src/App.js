import "./App.css";
import React from "react";
import Time from "./Components/Time";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Charlie",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Sandbox</h1>
          <Time name={this.state.name} />
        </header>
      </div>
    );
  }
}
