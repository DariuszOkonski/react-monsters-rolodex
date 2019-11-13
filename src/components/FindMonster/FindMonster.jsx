import React, { Component } from 'react';
import styles from './FindMonster.module.css';

class FindMonster extends Component {
  render() {
    return (
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          placeholder='Search for monsters...'
        />
      </div>
    );
  }
}

export default FindMonster;