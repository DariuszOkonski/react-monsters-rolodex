import React from 'react';
import styles from './Card.module.css';


const Card = (props) => {
  const { name, id, email, address: { city } } = props.item;

  return (
    <div className={styles.container}>
      <div>
        <img
          className={styles.image}
          src={`https://robohash.org/${id}?set=set2&size=180x180`} alt=""
        />
      </div>
      <p className={styles.paragraph}>{name}</p>
      <p className={styles.paragraph}>{email}</p>
      <p className={styles.paragraph}>{city}</p>
    </div>
  );
}

export default Card;