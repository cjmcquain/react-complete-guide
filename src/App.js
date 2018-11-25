import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
    console.log(doesShow);
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app.</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {
          this.state.showPersons === true ?
            <div>
              <Person
                name={this.state.persons[0].name} age={this.state.persons[0].age} />
              <Person
                name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler} click={this.switchNameHandler.bind(this, 'Max!')}>
                My Hobbies: Racing
              </Person>
              <Person
                name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div> : null
        }

      </div>
    );
  }
}

export default App;
