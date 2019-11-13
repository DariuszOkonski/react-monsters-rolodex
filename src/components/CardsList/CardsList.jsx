import React from 'react';
import styles from './CardsList.module.css';
import Card from './Card/Card';
import PropTypes from 'prop-types';


const CardsList = ({ monsters }) => {
  const listOfMonsters = monsters.map(m => <Card key={m.id} item={m} />)

  return (

    <div className={styles.container}>
      <ul className={styles.items}>
        {listOfMonsters}
      </ul>
    </div>
  );
}

CardsList.propTypes = {
  monsters: PropTypes.array.isRequired
}

export default CardsList;