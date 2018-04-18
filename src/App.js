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
          <Person
            name={this.state.person[0].name}
            age={this.state.person[0].age}
            // avoid using this
            click={() => this.switchnameHandler('Sean Bean')} />
          <Person
            name={this.state.person[1].name}
            age={this.state.person[1].age}
            changename={this.changename}
          >Likes guitar</Person>

          <Person
            name={this.state.person[2].name}
            age={this.state.person[2].age} />
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