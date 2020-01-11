import React, { Component } from "react";
import "./styles.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Bello", id: "1", time: "3: 30 PM" },
      { name: "Max", id: "2", time: "4: 30 PM" },
      { name: "Manu", id: "3", time: "5: 20 PM" }
    ]
  };

  switchNameHandler1 = () => {
    this.setState({
      persons: [
        { name: "Osagie", id: "4", time: "7: 30 PM" },
        { name: "Bob", id: "5", time: "8: 30 PM" },
        { name: "Elliot", id: "6", time: "10: 20 PM" }
      ]
    });
  };

  switchNameHandler2 = () => {
    this.setState({
      persons: [
        { name: "Bello", id: "1", time: "3: 30 PM" },
        { name: "Max", id: "2", time: "4: 30 PM" },
        { name: "Manu", id: "3", time: "5: 20 PM" }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Code Blogger</h1>
        <h1 style={{ textAlign: "center" }}>
          <button onClick={this.switchNameHandler1}>Next</button>
        </h1>
        <Person
          name={this.state.persons[0].name}
          id={this.state.persons[0].id}
          time={this.state.persons[0].time}
        />
        <Person
          name={this.state.persons[1].name}
          id={this.state.persons[1].id}
          time={this.state.persons[1].time}
        />
        <Person
          name={this.state.persons[2].name}
          id={this.state.persons[2].id}
          time={this.state.persons[2].time}
        />
        <h1 style={{ textAlign: "center" }}>
          <button onClick={this.switchNameHandler2}>Back</button>
        </h1>
      </div>
    );
  }
}

export default App;
