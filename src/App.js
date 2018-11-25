import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 35 },
        { name: 'Mark', age: 29 },
        { name: 'Stephanie', age: 28 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 35 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 28 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app.</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Trudy')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler} click={this.switchNameHandler.bind(this, 'Max!')}>
          My Hobbies: Racing
          </Person>
        <Person
          name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
