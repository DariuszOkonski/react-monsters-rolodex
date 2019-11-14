import React, { Component } from 'react';
import styles from './FindMonster.module.css';
import PropTypes from 'prop-types';

class FindMonster extends Component {
  handleChange = (e) => {
    this.props.handleFind(e.target.value)
  }

  render() {
    return (
      <div className={styles.container}>
        <input
          onChange={this.handleChange}
          className={styles.input}
          type="text"
          placeholder='Search for monsters...'
        />
      </div>
    );
  }
}

FindMonster.propTypes = {
  handleFind: PropTypes.func.isRequired,
}

export default FindMonster;