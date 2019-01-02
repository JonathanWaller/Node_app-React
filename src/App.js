import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import First from "./components/First/First";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Thomas"
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Simple Node App w/ React</h1>
        <First buddy={this.state.name} />
      </div>
    );
  }
}

export default App;
