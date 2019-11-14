import React, { Component } from 'react';
import styles from './App.module.css';
import CardsList from '../CardsList/CardsList';
import FindMonster from '../FindMonster/FindMonster';

class App extends Component {
  state = {
    monsters: [],
    find: []
  }

  componentDidMount() {
    this.handleFetchData();
  }

  handleFetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }

        throw new Error('Something went wrong')
      })
      .then(monsters => {
        this.setState({
          monsters,
          find: monsters,
        })
      })
      .catch(err => console.log(err));
  }

  handleFind = (name) => {
    let find = [...this.state.monsters];
    find = find.filter(m => m.name.toLowerCase().includes(name.toLowerCase()));

    this.setState({
      find
    })
  }

  render() {
    return (
      <div>
        <h1 className={styles.header}>monsters rolodex</h1>

        <FindMonster handleFind={this.handleFind} />

        <CardsList monsters={this.state.find} />
      </div>
    );
  }
}

export default App;

// "https://jsonplaceholder.typicode.com/users"
// https://robohash.org/${props.monster.id}?set=set2&size=180x180