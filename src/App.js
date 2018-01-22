import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TableTest from "./TableTest";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          */}
          React-table-test
        </header>
        <div className="App-intro">
          <TableTest />
        </div>
      </div>
    );
  }
}

export default App;
