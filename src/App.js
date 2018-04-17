import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person : [
      {
        name: "Kat",
        age: 23
      },
      {
        name: "Sean",
        age: 25
      },
      {
        name: "Ashley",
        age: 26
      },
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>This is a react app</h1>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} /> 
        <Person name={this.state.person[1].name} age={this.state.person[1].age}  > Likes guitar </Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );
  }
}

export default App;
