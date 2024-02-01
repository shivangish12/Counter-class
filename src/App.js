import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="containerStyle">
        <h1>Counter App</h1>
        <p>Count: {counter}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
