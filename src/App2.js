import React, { Component } from "react";
import "./styles.css";
import Person2 from "./Person/Person2";

class App2 extends Component {
  state = {
    persons: [{ name: "Bello", id: "1", time: "3: 30 PM" }]
  };

  switchNameHandler1 = () => {
    this.setState({
      persons: [{ name: "Osagie", id: "2", time: "7: 30 PM" }]
    });
  };

  switchNameHandler2 = () => {
    this.setState({
      persons: [{ name: "Bello", id: 1, time: "3: 30 PM" }]
    });
  };

  render() {
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Code Blogger</h1>
        <div style={{ textAlign: "center" }}>
          <button onClick={this.switchNameHandler1}>Next</button>
        </div>
        <Person2
          name={this.state.persons[0].name}
          id={this.state.persons[0].id}
          time={this.state.persons[0].time}
        />
      </div>
    );
  }
}

export default App2;
