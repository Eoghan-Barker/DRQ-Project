import React, { Component } from "react";

export class Content extends Component {
  render() {
    return (
      <div className="App-intro">
        <h1> Hello World!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
