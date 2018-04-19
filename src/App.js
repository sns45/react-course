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
    ],
    showPersons: true
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

  changenamehandler = (event, idx) => {
      const person = [...this.state.person];
      person[idx].name = event.target.value;
      this.setState({person : person});
  }
  
  toggleview = () => {
    const show = this.state.showPersons
    this.setState({
      showPersons: !show
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;


    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.person.map((person,idx) => 
            <Person 
            name={person.name} 
            age={person.age}
            change={ event => this.changenamehandler(event, idx) } 
            key={idx}/>
          )
          }
        </div>
      ) 
    }

    return (
      <div className="App">
        <h1>This is a react app</h1>
        <button 
          style = {style}
          onClick={this.toggleview}>
          Show/hide</button>
          <button 
          style = {style}
          onClick={this.switchnameHandler.bind(this, 'Sean Bean')}>
          Switch Name</button>
       {persons}
      </div>
    );
  }
}

export default App;