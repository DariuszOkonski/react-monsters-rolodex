import React, { Component } from 'react';
import styles from './App.module.css';

class App extends Component {
  state = {
    monsters: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }

        throw new Error('Something went wrong')
      })
      .then(monsters => {
        this.setState({
          monsters
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>monsters rolodex</h1>
      </div>
    );
  }
}

export default App;

// "https://jsonplaceholder.typicode.com/users"
// https://robohash.org/${props.monster.id}?set=set2&size=180x180