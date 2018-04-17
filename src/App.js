import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
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

  switchnameHandler = (newName) => {
    this.setState({
      person: [
        {
          name: "Kat",
          age: 23
        },
        {
          name: newName,
          age: 27
        },
        {
          name: "Ashley",
          age: 26
        },
      ]
    })
  }

  changename = (event) => {
      this.switchnameHandler(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <h1>This is a react app</h1>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
          // avoid using this
          click={ () => this.switchnameHandler('Sean Bean')} />          

        <button onClick={this.switchnameHandler.bind(this, 'Sean Bean')}>Switch Name</button>
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}  
          changename = {this.changename}
          > Likes guitar </Person>

        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age} />
      </div>
    );
  }
}

export default App;
